const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

const pagesConfig = [
  { postType: "blog", numPostPerPage: 5 },
  { postType: "cheatsheets", numPostPerPage: 6 },
  { postType: "meetups", numPostPerPage: 1 },
]

const postTypes = pagesConfig.map(x => x.postType)

function getPostType(slug) {
  return slug.split("/", 2)[1].toLowerCase()
}

function getPostCollection(slug) {
  let slugWithSerie = slug
    .split("/")
    .filter(x => x.toLowerCase().includes("-serie"))[0]
  if (slugWithSerie) {
    return slugWithSerie.replace("-serie", "")
  } else {
    return ``
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "Mdx") {
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode })
    const postType = getPostType(slug)
    createNodeField({
      node,
      name: "postType",
      value: postType,
    })
    createNodeField({
      node,
      name: "slugForSearch",
      value: slug,
    })

    if (postType === "blog") {
      const postSerie = getPostCollection(slug)
      if (postSerie) {
        createNodeField({
          node,
          name: "postSerie",
          value: postSerie,
        })
      }
    }
  }
}

// Create post pages programmatically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              tags
            }
            fields {
              postType
              postSerie
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const nodes = result.data.allMdx.edges
  const posts = nodes.filter(x => _.includes(postTypes, x.node.fields.postType))

  postTypes.map(postType => {
    const postsAssociated = posts.filter(
      x => x.node.fields.postType === postType
    )
    postsAssociated.forEach(({ node }, index) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post-layout.js`),
        context: {
          id: node.id,
          nextPostSlug: postsAssociated[index + 1]?.node.slug,
          previousPostSlug: postsAssociated[index - 1]?.node.slug,
        },
      })
    })
  })

  let tags = []
  posts
    .filter(
      x =>
        x.node.frontmatter.tags !== null && x.node.frontmatter.tags.length > 1
    )
    .map(x => x.node.frontmatter.tags)
    .forEach(tagArray => (tags = tags.concat(tagArray)))

  tags = _.uniq(tags).filter(x => x !== null)

  tags.forEach(tag => {
    createPage({
      path: `tags/${tag}`,
      component: path.resolve(`./src/templates/post-list-per-tags.js`),
      context: {
        tag: tag,
      },
    })
  })

  let postsCollectionsSlugs = []
  posts
    .filter(x => x.node.fields.postSerie !== null)
    .map(x => x.node.fields.postSerie)
    .forEach(serie => {
      if (!postsCollectionsSlugs.includes(serie))
        postsCollectionsSlugs.push(serie)
    })

  postsCollectionsSlugs.forEach(collection => {
    createPage({
      path: `collections/${collection}`,
      component: path.resolve(`./src/templates/post-list-per-collection.js`),
      context: {
        collection: collection,
      },
    })
  })

  pagesConfig.map(({ postType, numPostPerPage }) =>
    paginate({
      createPage,
      items: posts.filter(x => x.node.fields.postType === postType),
      itemsPerPage: numPostPerPage,
      pathPrefix: `/${postType}`,
      component: path.resolve(`./src/templates/post-list-${postType}.js`),
    })
  )
}
