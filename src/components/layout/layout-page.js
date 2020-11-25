import React from "react"
import LayoutFooter from "./layout-footer"
import LayoutHeader from "./layout-header"
import SEO from "../seo"

const LayoutPage = ({ children, seoData, location }) => (
  <div>
    <LayoutHeader location={location} />
    <SEO
      title={seoData?.title}
      description={seoData?.description}
      image={seoData?.image}
      article={seoData?.article}
    />
    {children}
    <LayoutFooter />
  </div>
)

export default LayoutPage
