import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout/layout"
import PostList from "../components/posts/post-list"
import TagsList from "../components/tags/tags-list"
import { postType } from "../models/postType"
import { orientationList } from "../models/orientationList"
import { Link } from "gatsby"

export default () => (
  <Layout title="Posts" imgRelativePath="../blog.jpg">
    <Container fluid>
      <Row fluid>
        <Col xs={12} md={8}>
          {/* LIMIT POST NUMBER, add pagination */}
          <PostList
            postType={postType.blog}
            orientation={orientationList.vertical}
          />
        </Col>
        <Col xs={6} md={4}>
          <Link to={`/tags`} style={{ color: "inherit" }}>
            <div style={{ marginBottom: "20px" }}>
              <h1>Tags</h1>
            </div>
          </Link>
          <TagsList maxTagsToList={10} />
          <Link to={`/tags`}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <Button variant="outline-primary">Browse them all</Button>
            </div>
          </Link>

          <Link to={`/tags`} style={{ color: "inherit" }}>
            <div style={{ marginBottom: "20px" }}>
              <h1>Collections</h1>
            </div>
          </Link>
          <TagsList maxTagsToList={10} />
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Link to={`/tags`}>
              <Button variant="outline-primary">Browse them all</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)
