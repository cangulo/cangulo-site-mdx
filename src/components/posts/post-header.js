import React from "react"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"
import PreviewCompatibleImage from "../preview-compatible-image"
import _ from "lodash"
import { Link } from "gatsby"

const PostHeader = ({ title, subtitle, collection, date, featuredimage }) => (
  <Jumbotron fluid>
    <Container fluid>
      <Row>
        <Col sm={12} md={{ offset: 1, span: 9 }}>
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
          {collection && (
            <Link to={`/collections/${collection}`}>
              <i>
                <h5>{`Serie ${_.startCase(collection)}`}</h5>
              </i>
            </Link>
          )}
          {date && (
            <i>
              <p>{date}</p>
            </i>
          )}
        </Col>
        <Col md="auto" className="d-none d-md-block">
          <div style={{ float: "right" }}>
            {featuredimage && (
              <PreviewCompatibleImage image={featuredimage} alt={title} />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default PostHeader
