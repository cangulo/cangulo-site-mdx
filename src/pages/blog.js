import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout/layout"
import PostList from "../components/posts/post-list"
import TagsList from "../components/tags/tags-list"
import { postType } from "../models/postType"
import { orientationList } from "../models/orientationList"
import HeaderLink from "../components/headers/header-link"
import CollectionsList from "../components/series/collection-list"

export default () => (
  <Layout title="Posts" imgRelativePath="../blog.jpg">
    <Container fluid>
      <Row fluid>
        <Col xs={12} sm={12} md={8} lg={8}>
          {/* LIMIT POST NUMBER, add pagination */}
          <PostList
            postType={postType.blog}
            orientation={orientationList.vertical}
            limit={10}
          />
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <HeaderLink to={`/tags`} title={"Tags"} />
          <TagsList maxTagsToList={10} showBrowseAll={true} />

          <HeaderLink to={`/collections`} title={"Collections"} />
          <CollectionsList maxCollectionsToList={10} showBrowseAll={true} />
        </Col>
      </Row>
    </Container>
  </Layout>
)
