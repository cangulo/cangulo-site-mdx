import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LayoutPage from "../components/layout/layout-page"
import PostCardVertical from "../components/posts/post-card/post-card-vertical"
import { graphql } from "gatsby"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"

export default function PageTemplate({ data, pageContext }) {
  const tag = pageContext.tag
  return (
    <LayoutPage seoData={{ title: tag && `Posts tagged with ${tag}` }}>
      <PageTitle
        title={tag && `Posts tagged with ${tag}`}
        imgRelativePath="./page-tags.jpg"
      />
      <LayoutContainer>
        <Container fluid="xs">
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
