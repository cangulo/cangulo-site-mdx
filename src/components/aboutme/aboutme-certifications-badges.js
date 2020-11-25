import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import AwsCertifiedDeveloperAssociate from "./certifications/aws-cert-developer"
import HelmetIframeScripts from "./certifications/helmet-iframe-certifications"
import ScrumtMasterPUE2019 from "./certifications/scrum-master-2019"

const AboutMeCertificationsBadges = () => (
  <div>
    <HelmetIframeScripts />
    <h3>Badges</h3>
    <Container fluid>
      <Row
        className="justify-content-md-center"
        style={{ textAlign: "center" }}
      >
        <Col style={{ padding: "10px 0" }}>
          <AwsCertifiedDeveloperAssociate />
        </Col>
        <Col style={{ padding: "10px 0" }}>
          <ScrumtMasterPUE2019 />
        </Col>
      </Row>
    </Container>
  </div>
)

export default AboutMeCertificationsBadges
