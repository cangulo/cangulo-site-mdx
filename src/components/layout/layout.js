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
        <Col xs={{ span: 10, offset: 1 }}>{children}</Col>
      </Row>
    </Container>
    <LayoutFooter />
  </div>
)

export default Layout
