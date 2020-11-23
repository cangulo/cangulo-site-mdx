import React from "react"
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import styles from "./layout-footer.module.scss"

const LayoutFooter = () => (
  <footer className={styles.footer}>
    <Container fluid>
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <ListGroup variant="flush" className={styles.customListgroup}>
            <ListGroup.Item href="/" variant="primary" action>
              <h5>Home</h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={{ span: 4 }}>
          <ListGroup variant="flush">
            <ListGroup.Item className={styles.customListgroup}>
              <h5>Posts</h5>
            </ListGroup.Item>
            <ListGroup.Item href="/cheatsheets" variant="primary" action>
              Cheatsheets
            </ListGroup.Item>
            <ListGroup.Item href="/blog" variant="primary" action>
              Blog
            </ListGroup.Item>
            <ListGroup.Item href="/meetups" variant="primary" action>
              Meetups
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={{ span: 3 }}>
          <ListGroup variant="flush" className={styles.customListgroup}>
            <ListGroup.Item href="/about" variant="primary" action>
              <h5>About</h5>
            </ListGroup.Item>
            <ListGroup.Item href="/contact" variant="primary" action>
              Contact
            </ListGroup.Item>
            <ListGroup.Item href="/contact" variant="primary" action>
              Contact
              <a
                href="https://github.com/cangulo"
                style={{ marginLeft: "10px" }}
              >
                <img
                  alt="Github"
                  src="/social-media/github.svg"
                  className={styles.icons}
                />
              </a>
              <a
                href="https://twitter.com/angulomascarell"
                style={{ marginLeft: "10px" }}
              >
                <img
                  alt="Github"
                  src="/social-media/twitter.svg"
                  className={styles.icons}
                />
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default LayoutFooter
