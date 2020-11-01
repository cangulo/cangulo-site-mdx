import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import PreviewCompatibleImage from "../../preview-compatible-image"

const PostCardVertical = ({ title, date, description, img, link }) => (
  <Card>
    <Card.Body>
      <Container fluid>
        <Row>
          <Col md="auto">
            <PreviewCompatibleImage image={img} alt={title} width={"100px"} />
          </Col>
          <Col>
            <Card.Title>{title}</Card.Title>
            {date && (
              <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            )}
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
