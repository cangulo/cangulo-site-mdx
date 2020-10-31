import React from "react"
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap"

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
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

export default LayoutHeader
