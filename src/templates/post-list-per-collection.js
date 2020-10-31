import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout/layout"
import PostCardVertical from "../components/posts/post-card-vertical"
import { graphql } from "gatsby"
import _ from "lodash"

export default function PageTemplate({ data, pageContext }) {
  const collection = pageContext.collection
  return (
    <Layout
      title={collection && `Collection ${_.startCase(collection)}`}
      imgRelativePath="./collections.jpg"
    >
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
  query PostPerCollection($collection: String) {
    allMdx(filter: { fields: { postSerie: { eq: $collection } } }) {
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
