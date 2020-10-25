import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../../components/layout/layout"
import PostHeader from "../../components/posts/post-header"
import PostTags from "../../components/posts/post-tags"
import PostReferences from "../../components/posts/post-references"
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <PostHeader
        title={mdx.frontmatter.title}
        date={mdx.frontmatter.date}
        featuredimage={mdx.frontmatter.img}
      />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      {mdx.frontmatter.tags && <PostTags tags={mdx.frontmatter.tags} />}
      {mdx.frontmatter.references && (
        <PostReferences references={mdx.frontmatter.references} />
      )}
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
        date(formatString: "DD/MM/YYYY")
        tags
        img {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        references
      }
      fields {
        postType
      }
    }
  }
`
