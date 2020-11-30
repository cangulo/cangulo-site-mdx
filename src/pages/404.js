import React from "react"
import LayoutPage from "../components/layout/layout-page"
import PageTitle from "../components/page-title"

const ContactPage = ({ location }) => (
  <LayoutPage location={location}>
    <PageTitle
      title="The page requested doesn't exist"
      imgRelativePath="./404.jpg"
    />
  </LayoutPage>
)

export default ContactPage
