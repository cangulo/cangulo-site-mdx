import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LayoutPage from "../components/layout/layout-page"
import PostCardVertical from "../components/posts/post-card/post-card-vertical"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"
import CardBrowseAll from "../components/cards/card-browse-all"

const BasePostListPer = ({
  posts,
  pageTitle,
  imgRelativePath,
  browseAllLink,
  browseAllMessage,
}) => (
  <LayoutPage seoData={{ title: pageTitle }}>
    <PageTitle title={pageTitle} imgRelativePath={imgRelativePath} />
    <LayoutContainer>
      <Container fluid>
        <Row sm={2} md={2} lg={3}>
          {posts &&
            posts.map((x, index) => (
              <Col
                style={{ padding: "15px" }}
                className="d-flex align-items-stretch"
                key={index}
              >
                <PostCardVertical
                  title={x.frontmatter.title}
                  postType={x.fields.postType}
                  date={x.frontmatter.date}
                  description={x.frontmatter.description}
                  img={x.frontmatter.img}
                  link={x.slug}
                />
              </Col>
            ))}
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <CardBrowseAll link={browseAllLink} label={browseAllMessage} />
          </Col>
        </Row>
      </Container>
    </LayoutContainer>
  </LayoutPage>
)

export default BasePostListPer
