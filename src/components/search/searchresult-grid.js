import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const SearchResultList = ({ children }) => (
  <Container fluid>
    <Row xs={1} sm={2} md={2} lg={3}>
      {children}
    </Row>
  </Container>
)

export default SearchResultList
