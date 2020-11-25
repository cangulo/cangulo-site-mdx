import React from "react"
import LayoutFooter from "./layout-footer"
import LayoutHeader from "./layout-header"
import PageTitle from "../page-title"
import SEO from "../seo"

const LayoutPage = ({
  children,
  title,
  seoData,
  subtitle,
  imgRelativePath,
  location,
}) => (
  <div>
    <LayoutHeader location={location} />
    <SEO
      title={seoData?.title ?? title}
      description={seoData?.description}
      image={seoData?.image}
      article={seoData?.article}
    />
    <PageTitle
      title={title}
      subtitle={subtitle}
      imgRelativePath={imgRelativePath}
    />
    {children}
    <LayoutFooter />
  </div>
)

export default LayoutPage
