import React from "react"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import SearchFormHeader from "../search/search-header"
import styles from "./layout-header.module.scss"
import _, { round } from "lodash"

const LayoutHeader = ({ location }) => (
  <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Navbar.Brand href="/">Carlos Angulo Mascarell</Navbar.Brand>

      <Nav className="mr-auto" activeKey={location?.pathname}>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/cheatsheets/">Cheatsheets</Nav.Link>
        <Nav.Link href="/blog/">Blog</Nav.Link>
        <Nav.Link href="/meetups/">Meetups</Nav.Link>
        <Nav.Link href="/about/">About</Nav.Link>
        <Nav.Link href="/contact/">Contact</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="https://www.linkedin.com/in/angulomascarell">
          <img
            alt="LinkedIn"
            src="/social-media/linkedin.svg"
            className={styles.icons}
          />
        </Nav.Link>
        {!_.includes(location?.pathname, "/search") && <SearchFormHeader />}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default LayoutHeader
