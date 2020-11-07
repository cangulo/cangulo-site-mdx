import React from "react"
import LayoutFooter from "./layout-footer"
import { Col, Container, Row } from "react-bootstrap"
import LayoutHeader from "./layout-header"
import PageTitle from "../page-title"
import SEO from "../seo"

const Layout = ({
  children,
  title,
  sameTitleAsSEO,
  seoTitle,
  subtitle,
  imgRelativePath,
}) => (
  <div>
    <LayoutHeader />
    <SEO
      title={sameTitleAsSEO ? title : seoTitle}
      // description={}
      // image={imgRelativePath}
      article="false"
    />
    <PageTitle
      title={title}
      subtitle={subtitle}
      imgRelativePath={imgRelativePath}
    />
    <Container fluid>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>{children}</Col>
      </Row>
    </Container>
    <LayoutFooter />
  </div>
)

export default Layout
