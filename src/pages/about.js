import React from "react"
import AboutMeArea from "../components/aboutme/aboutme-area"
import Layout from "../components/layout/layout"

const ContactPage = ({ location }) => (
  <div>
    <Layout title="About" location={location}>
      <AboutMeArea />
    </Layout>
  </div>
)

export default ContactPage
