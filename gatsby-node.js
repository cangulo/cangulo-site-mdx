const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")
const path = require("path")

const postTypes = ["blog", "meetups", "cheatsheets"]

function getPostType(slug) {
  return slug.split("/", 2)[1].toLowerCase()
}

function getPostSerie(slug) {
  return _.startCase(
    slug
      .split("/")
      .filter(x => x.toLowerCase().includes("serie"))[0]
      .split("-serie")[0]
  )
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

    if (postType === "blog") {
      const postSerie = getPostSerie(slug)
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

  // Create blog post pages.
  const nodes = result.data.allMdx.edges
  //   const posts = nodes.filter(x => x.fields.tags.includes( ))
  const posts = nodes.filter(x => _.includes(postTypes, x.node.fields.postType))

  // Create Post Pages

  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/post-layout.js`),
      context: {
        id: node.id,
        postType: node.fields.postType,
      },
    })
  })

  let tags = []
  posts
    .map(x => x.node.frontmatter.tags)
    .forEach(tagArray => {
      tags = tags.concat(tagArray)
    })

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
}
