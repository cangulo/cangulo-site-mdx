import React from "react"
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import styles from "./layout-footer.module.scss"

const LayoutFooter = () => (
  <footer className={styles.footer}>
    <Container fluid>
      <Row>
        <Col xs={{ span: 3, offset: 1 }} md>
          <ListGroup variant="flush" className={styles.customListgroup}>
            <ListGroup.Item href="/" variant="primary" action>
              <h5>Home</h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={{ span: 4 }} md>
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
        <Col xs={{ span: 3 }} md>
          <ListGroup variant="flush" className={styles.customListgroup}>
            <ListGroup.Item href="/about" variant="primary" action>
              <h5>About</h5>
            </ListGroup.Item>
            <ListGroup.Item href="/contact" variant="primary" action>
              Contact
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default LayoutFooter
