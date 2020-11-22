import React from "react"
import LayoutFooter from "./layout-footer"
import { Col, Container, Row } from "react-bootstrap"
import LayoutHeader from "./layout-header"
import PageTitle from "../page-title"
import SEO from "../seo"

const Layout = ({
  children,
  title,
  seoData,
  subtitle,
  imgRelativePath,
  location,
}) => (
  <div>
    <LayoutHeader location={location} />
    <SEO
      title={seoData?.title ?? title}
      description={seoData?.description}
      image={seoData?.image}
      article={seoData?.article}
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
