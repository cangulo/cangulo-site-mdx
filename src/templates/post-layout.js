import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostHeader from "../components/posts/post-header"
import PostTags from "../components/posts/post-tags"
import PostReferences from "../components/posts/post-references"
import MdxProvider from "../components/mdRenders/mdx-provider"
import PaginationPost from "../components/pagination/pagination-post"
import AboutMeArea from "../components/aboutme/aboutme-area"
import PostShare from "../components/posts/post-share"
import { Col, Container, Row } from "react-bootstrap"
import PostComments from "../components/posts/post-comments"

export default function PageTemplate({ data: { mdx }, pageContext }) {
  return (
    <Layout
      seoData={{
        title: mdx.frontmatter.title,
        description: mdx.frontmatter.description,
        image: mdx.frontmatter.img?.childImageSharp.fluid.src,
        article: true,
      }}
    >
      <PostHeader
        title={mdx.frontmatter.title}
        collection={mdx.fields?.postSerie}
        date={mdx.frontmatter.date}
        featuredimage={mdx.frontmatter.img}
      />
      <MdxProvider mdxContent={mdx.body} />
      <hr />
      <AboutMeArea />
      <hr style={{ margin: "10px 0" }} />
      <Container fluid>
        <Row>
          <Col md>
            <PostTags tags={mdx.frontmatter?.tags} />
          </Col>
          <Col md>
            <PostShare
              slug={mdx.slug}
              title={mdx.frontmatter.title}
              description={mdx.frontmatter.description}
              tags={mdx.frontmatter?.tags}
            />
          </Col>
        </Row>
      </Container>
      {mdx.frontmatter?.references && (
        <div>
          <hr style={{ margin: "15x 0" }} />
          <PostReferences references={mdx.frontmatter.references} />
        </div>
      )}
      <hr style={{ margin: "10px 0" }} />
      <PostComments slug={mdx.slug} />
      <hr style={{ margin: "10px 0" }} />
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
      slug
      frontmatter {
        title
        description
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
