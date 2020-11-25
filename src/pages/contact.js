import React from "react"
import Layout from "../components/layout/layout"
import { graphql, StaticQuery } from "gatsby"
import MdxProvider from "../components/mdRenders/mdx-provider"

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
  <Layout title="Contact" imgRelativePath="./contact.jpg" location={location}>
    <ContactMeArea />
  </Layout>
)

export default ContactPage
