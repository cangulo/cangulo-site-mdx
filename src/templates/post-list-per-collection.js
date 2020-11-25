import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LayoutPage from "../components/layout/layout-page"
import PostCardVertical from "../components/posts/post-card/post-card-vertical"
import { graphql } from "gatsby"
import _ from "lodash"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"

export default function PageTemplate({ data, pageContext }) {
  const collection = pageContext.collection
  return (
    <LayoutPage
      seoData={{ title: collection && `Collection ${_.startCase(collection)}` }}
    >
      <PageTitle
        title={collection && `Collection ${_.startCase(collection)}`}
        imgRelativePath="./collections.jpg"
      />
      <LayoutContainer>
        <Container fluid>
          <Row sm={2} md={2} lg={3}>
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
      </LayoutContainer>
    </LayoutPage>
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
