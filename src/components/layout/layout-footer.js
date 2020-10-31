import React from "react"
import { Col, Row } from "react-bootstrap"

const LayoutFooter = () => (
  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <Row>
      <Col xs={6} md>
        <h5>
          <a style={{ color: "inherit" }} href="/">
            Home
          </a>
        </h5>
      </Col>
      <Col xs={6} md>
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
      <Col xs={6} md>
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
  </footer>
)

export default LayoutFooter
