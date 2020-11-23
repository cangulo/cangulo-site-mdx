import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import SearchFormHeader from "../search/search-header"
import styles from "./layout-header.module.scss"
import _ from "lodash"

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
        <Navbar.Brand href="https://www.linkedin.com/in/angulomascarell">
          <img
            alt="LinkedIn"
            src="/social-media/linkedin.svg"
            className={styles.icons}
          />
        </Navbar.Brand>
        <Navbar.Brand href="https://github.com/cangulo">
          <img
            alt="Github"
            src="/social-media/github.svg"
            className={styles.icons}
          />
        </Navbar.Brand>
        <Navbar.Brand href="https://twitter.com/angulomascarell">
          <img
            alt="Github"
            src="/social-media/twitter.svg"
            className={styles.icons}
          />
        </Navbar.Brand>
        {/* {!_.includes(location?.pathname, "/search") && <SearchFormHeader />} */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default LayoutHeader
