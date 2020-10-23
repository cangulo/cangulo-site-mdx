const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

function getPostType(slug) {
   return slug.split('/', 2)[1].toLowerCase()
}

exports.onCreateNode = ({ node, getNode, actions }) => {
   if (node.internal.type === "Mdx") {
      const { createNodeField } = actions
      const slug = createFilePath({ node, getNode })
      const postType = getPostType(slug)
      createNodeField({
         node,
         name: 'slug',
         value: slug,
      })
      createNodeField({
         node,
         name: 'postType',
         value: postType,
      })
   }
}

// Create post pages programmatically
exports.createPages = async ({ graphql, actions, reporter }) => {
   const { createPage } = actions

   const result = await graphql(`
   query {
     allMdx {
       edges {
         node {
           id
           fields {
             slug
             postType
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
   const posts = result.data.allMdx.edges

   // you'll call `createPage` for each result
   posts.forEach(({ node }) => {
      createPage({
         // This is the slug you created before
         // (or `node.frontmatter.slug`)
         path: node.fields.slug,
         // This component will wrap our MDX content
         component: path.resolve(`./src/templates/post/post-layout.js`),
         // You can use the values in this context in
         // our page layout component
         context: {
            id: node.id,
            postType: node.fields.postType
         },
      })
   })
}