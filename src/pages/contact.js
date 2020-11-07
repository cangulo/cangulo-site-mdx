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
            img {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

const ContactPage = () => (
  <Layout title="Contact" imgRelativePath="./contact.jpg">
    <ContactMeArea />
  </Layout>
)

export default ContactPage
