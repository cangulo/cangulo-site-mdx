import React from "react"
import LayoutPage from "../components/layout/layout-page"
import { graphql, StaticQuery } from "gatsby"
import MdxProvider from "../components/mdRenders/mdx-provider"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"
import Contactform from "../components/contact/contact-form"
import { Col, Container, Row } from "react-bootstrap"

const ContactMeArea = () => (
  <StaticQuery
    query={graphql`
      query GetContactArea {
        mdx(slug: { eq: "contact/contact" }) {
          body
          frontmatter {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <h1>{data.mdx.frontmatter.title}</h1>
          <MdxProvider mdxContent={data.mdx.body} />
        </div>
      )
    }}
  />
)

const ContactPage = ({ location }) => (
  <LayoutPage location={location}>
    <PageTitle title="Contact" imgRelativePath="./contact.jpg" />
    <LayoutContainer>
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <h2>Social Networks</h2>
            <ContactMeArea />
          </Col>
          <Col>
            <h2>Contact Form</h2>
            <p>You can also contact me using this form.</p>
            <Contactform />
          </Col>
        </Row>
      </Container>
    </LayoutContainer>
  </LayoutPage>
)

export default ContactPage
