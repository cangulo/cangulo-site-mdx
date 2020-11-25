import React from "react"
import AboutMeCertificationsDescription from "../components/aboutme/aboutme-certifications-description"
import AboutMeCertificationsBadges from "../components/aboutme/aboutme-certifications-badges"
import LayoutPage from "../components/layout/layout-page"
import AboutMeIntroduction from "../components/aboutme/aboutme-introduction"
import LayoutContainer from "../components/layout/layout-container"

const ContactPage = ({ location }) => (
  <LayoutPage title="About" location={location}>
    <LayoutContainer>
      <AboutMeIntroduction />
      <AboutMeCertificationsDescription />
      <div style={{ padding: "10px 0" }}>
        <AboutMeCertificationsBadges />
      </div>
    </LayoutContainer>
  </LayoutPage>
)

export default ContactPage
