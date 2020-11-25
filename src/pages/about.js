import React from "react"
import AboutMeCertificationsDescription from "../components/aboutme/aboutme-certifications-description"
import AboutMeCertificationsBadges from "../components/aboutme/aboutme-certifications-badges"
import Layout from "../components/layout/layout"
import AboutMeIntroduction from "../components/aboutme/aboutme-introduction"

const ContactPage = ({ location }) => (
  <Layout title="About" location={location}>
    <AboutMeIntroduction />
    <AboutMeCertificationsDescription />
    <div style={{ padding: "10px 0" }}>
      <AboutMeCertificationsBadges />
    </div>
  </Layout>
)

export default ContactPage
