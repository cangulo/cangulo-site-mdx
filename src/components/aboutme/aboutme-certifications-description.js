import { graphql, StaticQuery } from "gatsby"
import React from "react"
import MdxProvider from "../mdRenders/mdx-provider"

const AboutMeCertificationsDescription = () => (
  <StaticQuery
    query={graphql`
      query GetAboutMeCertificationsDescription {
        mdx(slug: { eq: "aboutme/sections/aboutme-certifications" }) {
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

export default AboutMeCertificationsDescription
