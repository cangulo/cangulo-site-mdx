var _ = require("lodash")

function JoinPostParameters(
  slug,
  title,
  description,
  tags,
  postSerie,
  siteUrl
) {
  let result = `<div><h1>${title}</h1>`
  result += `<p>${description}</p><span> Check the article <a href="${siteUrl}/${slug}">here</a></span>`
  if (tags) {
    let links = tags.map(tag => `<a href="${siteUrl}/tags/${tag}">${tag}</a>`)
    links.push(`<a href="${siteUrl}/tags">All tags</a>`)
    result += `<p><b>Tags: </b>${links.join(", ")}</p>`
  }
  if (postSerie) {
    const collectionLink = `<a href="${siteUrl}/collections/${postSerie}">${postSerie}</a>`
    const allCollectionsLink = `<a href="${siteUrl}/collections">All collections</a>`
    result += `<p><b>Collection: </b>${collectionLink}, ${allCollectionsLink}</p>`
  }
  result += `</div>`
  return result
}

module.exports = {
  siteMetadata: {
    title: "Welcome!",
    titleTemplate: "%s - Carlos Angulo Blog",
    description:
      "This is my personal blog where you can find all my post as well as my cheatsheet. Feel free to contact me.",
    siteUrl: "https://carlosangulo.es",
    // siteUrl: "http://localhost:8000/",
    image: "/og-image.jpg",
    shareProfilePicture: "/profile-picture-preview-link.jpg",
    twitterHandle: "@AnguloMascarell",
    HyvorTalkWebsiteId: 1142,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pageContent`,
        path: `${__dirname}/pageContent/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`, `postType`, `postSerie`, `slug`],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            description: node => node.frontmatter.description,
            postType: node => node.fields.postType,
            postSerie: node => node.fields.postSerie,
            slug: node => node.fields.slugForSearch,
          },
        },
        filter: (node, getNode) => node.frontmatter.tags,
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                const postContent = JoinPostParameters(
                  edge.node.slug,
                  edge.node.frontmatter.title,
                  edge.node.frontmatter.description,
                  edge.node.frontmatter.tags,
                  edge.node.fields.postSerie,
                  site.siteMetadata.siteUrl
                )
                return Object.assign({}, edge.node.frontmatter, {
                  url: site.siteMetadata.siteUrl + "/" + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + "/" + edge.node.slug,
                  custom_elements: [{ "content:encoded": postContent }],
                })
              })
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: [frontmatter___date]}, 
                  filter: {fields: {postType: {in: ["blog","meetups"]}}}) {
                  edges {
                    node {
                      slug
                      frontmatter {
                        title
                        description
                        date
                        tags
                      }
                      fields {
                        postSerie
                      }
                    }
                  }
                }
              }
          `,
            output: "/rss.xml",
            title: "Carlos Angulo Blog",
          },
        ],
      },
    },
  ],
}
