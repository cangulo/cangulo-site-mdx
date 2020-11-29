import { graphql, StaticQuery } from "gatsby"
import React from "react"
import AboutMeEducationList from "./aboutme-education-list"

const AboutMeEducation = () => (
  <StaticQuery
    query={graphql`
      query GetAboutMeEducation {
        allMdx(
          filter: { slug: { regex: "/aboutme/sections/education/" } }
          sort: { fields: [frontmatter___endDate], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                subtitle
                centers {
                  acronym
                  fullname
                  link
                  img
                }
                startDate(formatString: "MM/YYYY")
                endDate(formatString: "MM/YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <h1>Education</h1>
          <AboutMeEducationList degrees={data.allMdx.edges.map(x => x.node)} />
        </div>
      )
    }}
  />
)

export default AboutMeEducation
