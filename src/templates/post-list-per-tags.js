import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout/layout"
import PostCardVertical from "../components/posts/post-card-vertical"
import { graphql } from "gatsby"

export default function PageTemplate({ data, pageContext }) {
  const tag = pageContext.tag
  return (
    <Layout title={tag && `Posts tagged with ${tag}`}>
      <Container fluid>
        <Row sm={2} md={3}>
          {data.allMdx.edges.map(({ node }) => (
            <Col style={{ padding: "15px" }}>
              <PostCardVertical
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                description={node.frontmatter.description}
                img={node.frontmatter.img}
                link={node.slug}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPerTag($tag: String) {
    allMdx(filter: { frontmatter: { tags: { eq: $tag } } }) {
      edges {
        node {
          slug
          frontmatter {
            title
            description
            date(formatString: "DD/MM/YYYY")
            img {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
