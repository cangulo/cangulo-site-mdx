import React from "react"
import { Container, Row } from "react-bootstrap"
import AboutMeExperienceCard from "./aboutme-experience-card"

const AboutMeExperienceList = ({ works }) => (
  <Container fluid>
    <Row>
      {works.map((x, index) => (
        <AboutMeExperienceCard
          title={x.frontmatter.title}
          subtitle={x.frontmatter.subtitle}
          company={x.frontmatter.company}
          location={x.frontmatter.location}
          startDate={x.frontmatter.startDate}
          currentlyWorking={x.frontmatter.currentlyWorking}
          endDate={x.frontmatter.endDate}
          body={x.body}
          key={index}
        />
      ))}
    </Row>
  </Container>
)

export default AboutMeExperienceList
