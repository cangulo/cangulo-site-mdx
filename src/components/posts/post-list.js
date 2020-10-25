import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import PostCard from "./post-card"

export default ({ postType }) => (
  <StaticQuery
    query={graphql`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
              fields {
                postType
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container fluid>
        <Row sm={2} md={3}>
          {data.allMdx.edges
            .filter(({ node }) => node.fields.postType === postType)
            .map(({ node }) => (
              <Col style={{ padding: "15px" }}>
                <PostCard
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
    )}
  />
)
