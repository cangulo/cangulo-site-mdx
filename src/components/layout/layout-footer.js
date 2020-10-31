import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const LayoutFooter = () => (
  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <Container fluid>
      <Row>
        <Col xs={{ span: 3, offset: 1 }} md>
          <h5>
            <a style={{ color: "inherit" }} href="/">
              Home
            </a>
          </h5>
        </Col>
        <Col xs={{ span: 4 }} md>
          <h5>Posts</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="/cheatsheets">
                Cheatsheets
              </a>
            </li>
            <li>
              <a class="text-muted" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a class="text-muted" href="/meetups">
                Meetups
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={{ span: 3 }} md>
          <h5>
            <a style={{ color: "inherit" }} href="/about">
              About
            </a>
          </h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default LayoutFooter
