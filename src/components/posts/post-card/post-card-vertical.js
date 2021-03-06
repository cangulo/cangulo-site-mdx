import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import PreviewCompatibleImage from "../../preview-compatible-image"
import { startCase } from "lodash"

const PostCardVertical = ({
  title,
  postType,
  date,
  description,
  img,
  link,
}) => (
  <Card>
    <Card.Body>
      <Container style={{ padding: "0" }} fluid>
        <Row style={{ flexWrap: "nowrap" }}>
          <Col>
            <Card.Title>{title}</Card.Title>
            {date && postType && (
              <Card.Subtitle className="mb-2 text-muted">
                {date} - {startCase(postType)}
              </Card.Subtitle>
            )}
            {!date && postType && (
              <Card.Subtitle className="mb-2 text-muted">
                {startCase(postType)}
              </Card.Subtitle>
            )}
          </Col>
          <Col className="d-none d-sm-block" sm={"auto"}>
            <PreviewCompatibleImage image={img} alt={title} />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr></hr>
            <Card.Text style={{ textAlign: "justify" }}>
              {description}
            </Card.Text>
          </Col>
        </Row>
      </Container>
    </Card.Body>
    <Card.Footer style={{ textAlign: "center" }}>
      <Card.Link href={`/${link}`}>
        <Button variant="primary">Read it</Button>
      </Card.Link>
    </Card.Footer>
  </Card>
)

export default PostCardVertical
