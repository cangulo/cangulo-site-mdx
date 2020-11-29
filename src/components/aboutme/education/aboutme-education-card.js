import React from "react"
import {
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
  Image,
} from "react-bootstrap"

const CenterDiv = ({ index, link, acronym, fullname }) => (
  <OverlayTrigger
    key={fullname}
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip id={`tooltip-${index}`}>{fullname}</Tooltip>}
  >
    <a href={link}>{acronym}</a>
  </OverlayTrigger>
)

const AboutMeEducationCard = ({
  title,
  subtitle,
  centers,
  startDate,
  endDate,
}) => {
  return (
    <Container style={{ padding: "10px 0" }} fluid>
      <Row>
        <Col>
          <h6>{title}</h6>
          {subtitle && (
            <span>
              <i>{subtitle}</i>
            </span>
          )}
          <div>
            {centers.map((x, index) => {
              if (centers.length - 1 !== index) {
                return (
                  <CenterDiv
                    index={index}
                    acronym={`${x.acronym}, `}
                    fullname={x.fullname}
                    link={x.link}
                    key={index}
                  />
                )
              } else {
                return (
                  <CenterDiv
                    index={index}
                    acronym={x.acronym}
                    fullname={x.fullname}
                    link={x.link}
                    key={index}
                  />
                )
              }
            })}
          </div>
          <p>
            {startDate} - {endDate}
          </p>
        </Col>
        <Col md="auto">
          <Container style={{ padding: "0" }} fluid>
            <Row style={{ justifyContent: "flex-end" }}>
              {centers.map((x, index) => (
                <Col md="auto">
                  <a href={x.link}>
                    <Image src={x.img} key={index} fluid rounded />
                  </a>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
export default AboutMeEducationCard
