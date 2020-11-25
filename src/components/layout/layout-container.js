import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const LayoutContainer = ({ children }) => (
  <Container fluid>
    <Row>
      <Col xs={12} md={{ span: 10, offset: 1 }}>
        {children}
      </Col>
    </Row>
  </Container>
)

export default LayoutContainer
