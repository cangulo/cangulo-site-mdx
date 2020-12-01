import React from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import Img from "gatsby-image"

const PostCardForGrid = ({
  title,
  date,
  description,
  showCardImage,
  img,
  link,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {date && (
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      )}
      {/* <Container fluid>
        <Row style={{ flexDirection: "row-reverse" }}>
          <Col className="d-none d-md-block" md="3">
            <Image
              src={img.childImageSharp.fluid.src}
              srcSet={img.childImageSharp.fluid.srcSet}
              alt={title}
              fluid
            />
          </Col>
        </Row>
      </Container> */}
      <hr />
      <Card.Link href={`/${link}`}>
        <Card.Text style={{ color: "black", textAlign: "justify" }}>
          {description}
        </Card.Text>
      </Card.Link>
    </Card.Body>
    <Card.Footer style={{ textAlign: "center" }}>
      <Card.Link href={`/${link}`}>
        <Button variant="primary">Read it</Button>
      </Card.Link>
    </Card.Footer>
  </Card>
)

export default PostCardForGrid
