import React from "react"
import _ from "lodash"
import { Col, Container, Row } from "react-bootstrap"

const PostResources = ({ resources }) => {
  if (resources && Object.values(resources).length > 0) {
    const resourcesEntries = Object.values(resources)
    const codeEntries = resourcesEntries.filter(x => x.type === "code")
    const videoEntries = resourcesEntries.filter(x => x.type === "video")
    if (codeEntries.length > 0 || videoEntries.length > 0) {
      return (
        <section style={{ marginTop: "10px" }}>
          <h2>Resources</h2>
          <Container fluid>
            <Row>
              {resourcesEntries.length > 0 && (
                <Col>
                  {resourcesEntries.map((x, index) => (
                    <div key={index}>
                      <a href={x.link}>
                        <b>{x.title}</b>
                      </a>
                      <p>{x.description}</p>
                    </div>
                  ))}
                </Col>
              )}
            </Row>
          </Container>
        </section>
      )
    }
  }
  return ""
}

export default PostResources
