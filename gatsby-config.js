module.exports = {
  siteMetadata: {
    title: "Carlos Angulo Blog",
    description:
      "This is my personal blog where you can find all my post as well as my cheatsheet. Feel free to contact me.",
    siteUrl: "http://cangulo.surge.sh/",
    // siteUrl: "http://localhost:8000/",
    shareProfilePicture: "/profile-picture-preview-link.jpg",
    twitterHandle: "@AnguloMascarell",
    HyvorTalkWebsiteId: 1142,
  },
  plugins: [
    { resolve: "gatsby-plugin-sass", options: {} },
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
      resolve: `gatsby-plugin-feed`,
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
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(filter: {fields: {postType: {in: ["cheatsheets", "blog", "meetups"]}}}, sort: {fields: [frontmatter___date], order: DESC}) {
                  edges {
                    node {
                      slug
                      frontmatter {
                        title
                        description
                        date(formatString: "DD/MM/YYYY")
                      }
                      html
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Carlos Angulo Blog RSS",
            // optional configuration to insert feed reference in pages:
            // match: "^/(blog)|(cheatsheets)|(meetups)/",
          },
        ],
      },
    },
  ],
}
