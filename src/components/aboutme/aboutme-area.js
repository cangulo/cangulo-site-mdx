import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import MdxProvider from "../mdRenders/mdx-provider"

const AboutMeArea = () => (
  <StaticQuery
    query={graphql`
      query GetAboutMePostArea {
        mdx(slug: { eq: "aboutme/aboutme-post-area" }) {
          body
          frontmatter {
            title
            img {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Container style={{ margin: "1rem 0 0.5rem 0", padding: 0 }} fluid>
          <Row className="justify-content-center">
            <Col xs={10} sm={7} md={9} lg={10}>
              <h1>{data.mdx.frontmatter.title}</h1>
              <MdxProvider mdxContent={data.mdx.body} />
            </Col>
            <Col xs={7} sm={5} md={3} lg={2}>
              {data.mdx.frontmatter.img?.childImageSharp?.fluid && (
                <Img
                  fluid={data.mdx.frontmatter.img.childImageSharp.fluid}
                  alt=""
                />
              )}
            </Col>
          </Row>
        </Container>
      )
    }}
  />
)

export default AboutMeArea
