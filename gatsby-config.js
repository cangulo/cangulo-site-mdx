var _ = require("lodash")

module.exports = {
  siteMetadata: {
    title: "Welcome!",
    titleTemplate: "%s - Carlos Angulo Blog",
    description:
      "This is my personal blog where you can find all my post as well as my cheatsheet. Feel free to contact me.",
    siteUrl: "https://carlosangulo.es",
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
  ],
}
