import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostHeader from "../components/posts/post-header"
import PostTags from "../components/posts/post-tags"
import PostReferences from "../components/posts/post-references"
import MdxProvider from "../components/mdRenders/mdx-provider"
import PaginationPost from "../components/pagination/pagination-post"
import AboutMeArea from "../components/aboutme/aboutme-area"

export default function PageTemplate({ data: { mdx }, pageContext }) {
  return (
    <Layout>
      <PostHeader
        title={mdx.frontmatter.title}
        collection={mdx.fields?.postSerie}
        date={mdx.frontmatter.date}
        featuredimage={mdx.frontmatter.img}
      />
      <MdxProvider mdxContent={mdx.body} />
      <hr></hr>
      <AboutMeArea />
      <hr></hr>
      <PostTags tags={mdx.frontmatter?.tags} />
      <PostReferences references={mdx.frontmatter?.references} />
      <hr></hr>
      <PaginationPost
        previousPostSlug={pageContext.nextPostSlug}
        nextPostSlug={pageContext.previousPostSlug}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
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
