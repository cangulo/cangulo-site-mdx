import React from "react"
import { Link } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"

const PaginationPost = ({ previousPostSlug, nextPostSlug }) => (
  <Container fluid>
    <Row>
      <Col xs={5} style={{ textAlign: "left" }}>
        {previousPostSlug && (
          <Link to={`/${previousPostSlug}`}>
            <h5>Previous Post</h5>
          </Link>
        )}
      </Col>
      <Col xs={{ span: 4, offset: 3 }} style={{ textAlign: "right" }}>
        {nextPostSlug && (
          <Link to={`/${nextPostSlug}`}>
            <h5>Next Post</h5>
          </Link>
        )}
      </Col>
    </Row>
  </Container>
)

export default PaginationPost
