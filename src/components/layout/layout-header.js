import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import SearchFormHeader from "../search/search-header"
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
        <Nav.Link href="/search/" className="d-none d-md-block d-lg-none">
          Search
        </Nav.Link>
      </Nav>
      <Nav>
        <div className="d-xs-block d-md-none d-lg-block">
          {!_.includes(location?.pathname, "/search") && <SearchFormHeader />}
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default LayoutHeader
