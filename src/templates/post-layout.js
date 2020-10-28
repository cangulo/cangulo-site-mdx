import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostHeader from "../components/posts/post-header"
import PostTags from "../components/posts/post-tags"
import PostReferences from "../components/posts/post-references"
import MdxProvider from "../components/mdRenders/mdx-provider"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <PostHeader
        title={mdx.frontmatter.title}
        collection={mdx.fields?.postSerie}
        date={mdx.frontmatter.date}
        featuredimage={mdx.frontmatter.img}
      />
      <MdxProvider mdxContent={mdx.body} />
      <PostTags tags={mdx.frontmatter?.tags} />
      <PostReferences references={mdx.frontmatter?.references} />
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
        postSerie
      }
    }
  }
`
