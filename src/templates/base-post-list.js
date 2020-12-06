import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LayoutPage from "../components/layout/layout-page"
import PostCardVertical from "../components/posts/post-card/post-card-vertical"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"
import CardBrowseAll from "../components/cards/card-browse-all"

const BasePostList = ({ posts, browseAllLink, pageTitle, imgRelativePath }) => (
  <LayoutPage seoData={{ title: pageTitle }}>
    <PageTitle title={pageTitle} imgRelativePath={imgRelativePath} />
    <LayoutContainer>
      <Container fluid>
        <Row sm={2} md={2} lg={3}>
          {posts.map(({ post }) => (
            <Col
              style={{ padding: "15px" }}
              className="d-flex align-items-stretch"
            >
              <PostCardVertical
                title={post.frontmatter.title}
                postType={post.fields.postType}
                date={post.frontmatter.date}
                description={post.frontmatter.description}
                img={post.frontmatter.img}
                link={post.slug}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <CardBrowseAll link={browseAllLink} label={`Browse All`} />
          </Col>
        </Row>
      </Container>
    </LayoutContainer>
  </LayoutPage>
)

export default BasePostList
