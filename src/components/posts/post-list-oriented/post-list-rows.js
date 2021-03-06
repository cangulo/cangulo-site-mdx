import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import PostCardVertical from "../post-card/post-card-vertical"

const PostRowList = ({ posts }) => (
  <Container fluid>
    <Row>
      <Col className="d-flex align-items-stretch" style={{flexDirection:"column"}}>
        {posts.map((post, index) => (
          <div style={{ marginBottom: "20px" }} key={index}>
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
