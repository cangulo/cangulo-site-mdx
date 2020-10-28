import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import PostCardVertical from "../post-card-vertical"

const PostRowList = ({ posts }) => (
  <Container fluid>
    <Row>
      <Col>
        {posts.map(post => (
          <div style={{ marginBottom: "20px" }}>
            <PostCardVertical
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              description={post.frontmatter.description}
              img={post.frontmatter.img}
              link={post.slug}
            />
          </div>
        ))}
      </Col>
    </Row>
  </Container>
)

export default PostRowList
