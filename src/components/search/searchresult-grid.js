import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const SearchResultList = ({ children }) => (
  <Container fluid>
    <Row style={{ flexDirection: "column" }}>{children}</Row>
  </Container>
)

export default SearchResultList
