import React from "react"
import AboutMeCertificationsDescription from "../components/aboutme/aboutme-certifications-description"
import AboutMeCertificationsBadges from "../components/aboutme/aboutme-certifications-badges"
import LayoutPage from "../components/layout/layout-page"
import AboutMeIntroduction from "../components/aboutme/aboutme-introduction"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"
import AboutMeEducation from "../components/aboutme/education/aboutme-education"
import AboutMeExperience from "../components/aboutme/expirience/aboutme-experience"

const ContactPage = ({ location }) => (
  <LayoutPage location={location}>
    <PageTitle title="About" />
    <LayoutContainer>
      <AboutMeIntroduction />
      <hr />
      <AboutMeCertificationsDescription />
      <div style={{ padding: "10px 0" }}>
        <AboutMeCertificationsBadges />
      </div>
      <hr />
      <AboutMeEducation />
      <hr />
      <AboutMeExperience />
    </LayoutContainer>
  </LayoutPage>
)

export default ContactPage
