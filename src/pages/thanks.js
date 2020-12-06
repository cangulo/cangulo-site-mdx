import React from "react"
import LayoutPage from "../components/layout/layout-page"
import PageTitle from "../components/page-title"

const ThanksPage = ({ location }) => (
  <LayoutPage location={location}>
    <PageTitle
      title="Thanks!"
      subtitle="I will contact you soon :)"
      imgRelativePath="./contact.jpg"
    />
  </LayoutPage>
)

export default ThanksPage
