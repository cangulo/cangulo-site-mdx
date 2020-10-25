import { Link } from "gatsby"
import React from "react"
import { Badge, Button, Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout/layout"
import PostCard from "../components/posts/post-card"
import _ from "lodash"

export default function PageTemplate({
  data: {
    allMdx: { group },
  },
}) {
  return (
    <Layout title="Tags" imgRelativePath="../page-tags.jpg">
      <div
        style={{
          listStyle: "none",
          marginBottom: 0,
          marginRight: "1.5rem",
          marginTop: "1.5rem",
          display: "flex",
          marginLeft: 0,
          justifyContent: "left",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {group.map(tag => (
          <div
            style={{
              padding: "0 2rem 1rem 0",
              marginBottom: "1.5rem",
              marginTop: 0,
            }}
          >
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              <Button variant="primary">
                {tag.fieldValue}
                <Badge variant="light" style={{ marginLeft: "10px" }}>
                  {tag.totalCount}
                </Badge>
              </Button>
            </Link>
          </div>
        ))}
      </div>
      {/* <Container fluid>
        <Row sm={2} md={3}>
          {data.allMdx.edges.map(({ node }) => (
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
      </Container> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagAndCountPosts {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
