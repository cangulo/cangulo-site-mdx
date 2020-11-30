import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import PostCardForGrid from "../post-card/post-card-for-grid"

const PostGridList = ({ posts, numColumns }) => (
  <Container fluid>
    <Row xs={1} sm={2} lg={numColumns ?? 3}>
      {posts.map((post, index) => (
        <Col
          className="d-flex align-items-stretch"
          style={{ padding: "15px" }}
          key={index}
        >
          <PostCardForGrid
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
            img={post.frontmatter.img}
            link={post.slug}
          />
        </Col>
      ))}
    </Row>
  </Container>
)

export default PostGridList
