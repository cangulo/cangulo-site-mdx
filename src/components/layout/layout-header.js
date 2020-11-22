import React, { Component } from "react"
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap"
import styles from "./layout-header.module.scss"

export default class LayoutHeader extends Component {
  state = {
    val: "",
  }

  onSubmit = () => {
    this.props.history.push(`/test`)
    // console.log(this.state.val)
    console.log(` tes`)
  }

  render() {
    return (
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
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/angulomascarell">
              <img
                alt=""
                src="/social-media/linkedin.svg"
                className={styles.icons}
              />
            </Nav.Link>
            <Nav.Link href="https://github.com/cangulo">
              <img
                alt=""
                src="/social-media/github.svg"
                className={styles.icons}
              />
            </Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              value={this.state.val}
              onChange={e => this.setState({ val: e.target.value })}
              className="mr-sm-2"
            />
            <Button variant="outline-light" onClick={this.onSubmit}>
              Search
            </Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
