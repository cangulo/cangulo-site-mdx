import React from "react"
import { Container, Row } from "react-bootstrap"
import AboutMeEducationCard from "./aboutme-education-card"

const AboutMeEducationList = ({ degrees }) => (
  <Container fluid>
    <Row>
      {degrees.map((x, index) => (
        <AboutMeEducationCard
          title={x.frontmatter.title}
          subtitle={x.frontmatter.subtitle}
          centers={x.frontmatter.centers}
          startDate={x.frontmatter.startDate}
          endDate={x.frontmatter.endDate}
          key={index}
        />
      ))}
    </Row>
  </Container>
)

export default AboutMeEducationList
