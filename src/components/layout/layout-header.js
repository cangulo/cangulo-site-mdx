import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import SearchFormHeader from "../search/search-header"
import styles from "./layout-header.module.scss"

const LayoutHeader = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Navbar.Brand href="/">Carlos Angulo Mascarell</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/cheatsheets">Cheatsheets</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/meetups">Meetups</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="https://www.linkedin.com/in/angulomascarell">
          <img
            alt=""
            src="/social-media/linkedin.svg"
            className={styles.icons}
          />
        </Nav.Link>
        <Nav.Link href="https://github.com/cangulo">
          <img alt="" src="/social-media/github.svg" className={styles.icons} />
        </Nav.Link>
        <SearchFormHeader />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default LayoutHeader
