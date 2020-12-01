import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import _ from "lodash"
import { Link } from "gatsby"
import TagArea from "../tags/tags-area"

const SearchResultCard = ({
  title,
  slug,
  tags,
  description,
  postType,
  postSerie,
}) => {
  return (
    <Col style={{ padding: "15px" }}>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link to={slug} style={{ color: "black" }}>
              {title}
            </Link>
          </Card.Title>
          <span>
            <Link to={`../${postType}`}>{_.startCase(postType)}</Link>
          </span>
          {postSerie && (
            <span>
              {` - Serie: `}
              <Link to={`/collections/${postSerie}`}>
                <i>
                  <cite title="Source Title">{_.startCase(postSerie)}</cite>
                </i>
              </Link>
            </span>
          )}
          <hr />
          <Card.Link href={slug}>
            <Card.Text
              style={{
                padding: "10px 0",
                textAlign: "justify",
                color: "black",
              }}
            >
              {description}
            </Card.Text>
          </Card.Link>
          {tags && (
            <div style={{ paddingTop: "10px" }}>
              <h6>Tags:</h6>
              <TagArea tags={tags} />
            </div>
          )}
        </Card.Body>
        <Card.Footer style={{ textAlign: "center" }}>
          <Card.Link href={slug}>
            <Button variant="primary">Read it</Button>
          </Card.Link>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default SearchResultCard
