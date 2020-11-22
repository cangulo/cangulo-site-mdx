import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import SearchFormHeader from "../search/search-header"
import styles from "./layout-header.module.scss"
import _ from "lodash"

const LayoutHeader = ({ location }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="/">Carlos Angulo Mascarell</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" activeKey={location?.pathname}>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/cheatsheets/">Cheatsheets</Nav.Link>
        <Nav.Link href="/blog/">Blog</Nav.Link>
        <Nav.Link href="/meetups/">Meetups</Nav.Link>
        <Nav.Link href="/about/">About</Nav.Link>
        <Nav.Link href="/contact/">Contact</Nav.Link>
      </Nav>
      <Nav>
        <Navbar.Brand href="">
          <img
            alt=""
            src="/social-media/linkedin.svg"
            className={styles.icons}
          />
        </Navbar.Brand>
        <Navbar.Brand href="https://github.com/cangulo">
          <img alt="" src="/social-media/github.svg" className={styles.icons} />
        </Navbar.Brand>
      </Nav>
      {!_.includes(location?.pathname, "/search") && <SearchFormHeader />}
    </Navbar.Collapse>
  </Navbar>
)

export default LayoutHeader
