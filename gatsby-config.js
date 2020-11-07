module.exports = {
  siteMetadata: {
    title: "Welcome!",
    titleTemplate: "%s - Carlos Angulo Blog",
    description:
      "This is my personal blog where you can find all my post as well as my cheatsheet. Feel free to contact me.",
    siteUrl: "http://cangulo.surge.sh/",
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
  ],
}
