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
          <Container fluid>
            <Row>
              <Col>
                <Card.Title>
                  <Link to={slug} style={{ color: "black" }}>
                    {title}
                  </Link>
                </Card.Title>
                <hr></hr>
                <span>
                  <Link to={`../${postType}`}>{_.startCase(postType)}</Link>
                </span>
                {postSerie && (
                  <span>
                    {` - Serie: `}
                    <Link to={`/collections/${postSerie}`}>
                      <i>
                        <cite title="Source Title">
                          {_.startCase(postSerie)}
                        </cite>
                      </i>
                    </Link>
                  </span>
                )}

                <Card.Text style={{ marginTop: "10px" }}>
                  {description}
                </Card.Text>

                {tags && (
                  <div>
                    <h6>Tags:</h6>
                    <TagArea tags={tags} />
                  </div>
                )}
                <div style={{ paddingTop: "15px", textAlign: "center" }}>
                  <Card.Link href={slug}>
                    <Button variant="primary">Read it</Button>
                  </Card.Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SearchResultCard
