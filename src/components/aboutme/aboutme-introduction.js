import { graphql, StaticQuery } from "gatsby"
import React from "react"
import MdxProvider from "../mdRenders/mdx-provider"

const AboutMeIntroduction = () => (
  <StaticQuery
    query={graphql`
      query GetAboutMeIntroduction {
        mdx(slug: { eq: "aboutme/sections/aboutme-introduction" }) {
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

export default AboutMeIntroduction
