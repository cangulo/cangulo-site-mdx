import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import PreviewCompatibleImage from "../../preview-compatible-image"

const PostCardVertical = ({ title, date, description, img, link }) => (
  <Card>
    <Card.Body>
      <Container fluid>
        <Row>
          <Col>
            <Card.Title>{title}</Card.Title>
            {date && (
              <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            )}
          </Col>
          <Col className="d-none d-md-block" md={"auto"}>
            <PreviewCompatibleImage image={img} alt={title} />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr></hr>
            <Card.Text>{description}</Card.Text>
            <Card.Link href={`/${link}`}>
              <Button variant="primary">Read it</Button>
            </Card.Link>
          </Col>
        </Row>
      </Container>
    </Card.Body>
  </Card>
)

export default PostCardVertical
