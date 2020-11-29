import { graphql, StaticQuery } from "gatsby"
import React from "react"
import AboutMeExperienceList from "./aboutme-experience-list"

const AboutMeExperience = () => (
  <StaticQuery
    query={graphql`
      query GetAboutMeExperience {
        allMdx(
          filter: { slug: { regex: "/aboutme/sections/experience/" } }
          sort: { fields: [frontmatter___endDate], order: DESC }
        ) {
          edges {
            node {
              body
              frontmatter {
                title
                subtitle
                company {
                  name
                  link
                  img
                }
                location
                startDate(formatString: "MM/YYYY")
                currentlyWorking
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
          <h1>Experience</h1>
          <AboutMeExperienceList works={data.allMdx.edges.map(x => x.node)} />
        </div>
      )
    }}
  />
)

export default AboutMeExperience
