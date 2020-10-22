const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
   if (node.internal.type === 'Mdx') {
      const { createNodeField } = actions
      const slug = createFilePath({ node, getNode })
      console.log(node)
      console.log(`slug on CreateNode`)
      createNodeField({
         node,
         name: 'slug',
         value: slug,
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
           }
         }
       }
     }
   }
 `)

   console.log(`RESULT`)
   console.log(result)

   if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
   }

   // Create blog post pages.
   const posts = result.data.allMdx.edges

   // you'll call `createPage` for each result
   posts.forEach(({ node }, index) => {
      console.log('FOREACH')
      console.log(node)
      createPage({
         // This is the slug you created before
         // (or `node.frontmatter.slug`)
         path: node.fields.slug,
         // This component will wrap our MDX content
         component: path.resolve(`./src/templates/post/post-layout.js`),
         // You can use the values in this context in
         // our page layout component
         context: { id: node.id },
      })
   })
}