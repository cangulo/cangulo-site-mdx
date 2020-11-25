import React from "react"
import LayoutPage from "../components/layout/layout-page"
import { graphql, StaticQuery } from "gatsby"
import MdxProvider from "../components/mdRenders/mdx-provider"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"

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
      <ContactMeArea />
    </LayoutContainer>
  </LayoutPage>
)

export default ContactPage
