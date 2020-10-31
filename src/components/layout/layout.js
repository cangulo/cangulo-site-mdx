import React from "react"
import LayoutFooter from "./layout-footer"
import { Col, Container, Row } from "react-bootstrap"
import LayoutHeader from "./layout-header"
import PageTitle from "../page-title"

const Layout = ({ children, title, subtitle, imgRelativePath }) => (
  <div>
    <LayoutHeader />
    <PageTitle
      title={title}
      subtitle={subtitle}
      imgRelativePath={imgRelativePath}
    />
    <Container fluid>
      <Row>
        <Col />
        <Col xs={10}>
          {children}
          <LayoutFooter />
        </Col>
        <Col />
      </Row>
    </Container>
  </div>
)

export default Layout
