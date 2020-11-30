import React from "react"
import { Button, Card } from "react-bootstrap"

const PostCardForGrid = ({ title, date, description, img, link }) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {date && (
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      )}
      <hr></hr>
      <Card.Link href={`/${link}`}>
        <Card.Text style={{ color: "black", textAlign: "justify" }}>
          {description}
        </Card.Text>
      </Card.Link>
    </Card.Body>
    <Card.Footer style={{background:""}}>
      <Button variant="primary">Read it</Button>
    </Card.Footer>
  </Card>
)

export default PostCardForGrid
