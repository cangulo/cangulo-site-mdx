import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from '../../components/layout'
import { postType } from '../../models/postType'
import PostHeader from "../../components/posts/post-header"
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
   console.log(mdx.fields.postType === postType.cheatsheets);
   return (
      <Layout>
         <PostHeader 
            title={mdx.frontmatter.title}
             />
         {mdx.fields.postType === postType.blog && <h2>Blog</h2>}
         {mdx.fields.postType === postType.cheatsheets && <h2>Cheatsheets</h2>}
         {mdx.fields.postType === postType.meetups && <h2>Meetups</h2>}
         <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
         </MDXProvider>
      </Layout>
   )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
         slug
         postType
       }
    }
  }
`