import React from "react"
import LayoutPage from "../components/layout/layout-page"
import PageTitle from "../components/page-title"

const ContactPage = ({ location }) => (
  <LayoutPage location={location} imgRelativePath="./404.jpg">
    <PageTitle title="The page requested doesn't exist" />
  </LayoutPage>
)

export default ContactPage
