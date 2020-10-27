import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout/layout"
import PostList from "../components/posts/post-list"
import TagsList from "../components/tags/tags-list"
import { postType } from "../models/postType"
import { orientationList } from "../models/orientationList"

export default () => (
  <Layout title="Posts" imgRelativePath="../blog.jpg">
    <Container fluid>
      <Row fluid>
        <Col xs={8}>
          <PostList
            postType={postType.blog}
            orientation={orientationList.vertical}
          />
        </Col>
        <Col>
          <TagsList maxTagsToList={10} />
        </Col>
      </Row>
    </Container>
  </Layout>
)
