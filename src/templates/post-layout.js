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
      <Container fluid>
        <Row>
          <Col>
            <PostTags tags={mdx.frontmatter?.tags} />
          </Col>
          <Col>
            <PostShare
              slug={mdx.slug}
              title={mdx.frontmatter.title}
              description={mdx.frontmatter.description}
              tags={mdx.frontmatter?.tags}
            />
          </Col>
        </Row>
      </Container>
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
