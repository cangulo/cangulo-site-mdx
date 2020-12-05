import React from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import MdxProvider from "../../mdRenders/mdx-provider"

const AboutMeExperienceCard = ({
  title,
  subtitle,
  company,
  location,
  startDate,
  currentlyWorking,
  endDate,
  body,
}) => {
  return (
    <Container style={{ padding: "10px 0" }} fluid>
      <Row>
        <Col>
          <h5>
            {title} at {company.name}
          </h5>
          {subtitle && (
            <span>
              <i>{subtitle}</i>
            </span>
          )}
          <p>
            {`${startDate} - ${currentlyWorking ? `Present` : `${endDate}`}`}
            <div>{location}</div>
          </p>
        </Col>
        <Col md="3">
          <Container fluid>
            <Row>
              <a href={company.link}>
                <Image src={company.img} fluid rounded />
              </a>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <MdxProvider mdxContent={body} />
        </Container>
      </Row>
    </Container>
  )
}
export default AboutMeExperienceCard
