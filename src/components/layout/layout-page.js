import React from "react"
import LayoutFooter from "./layout-footer"
import LayoutHeader from "./layout-header"
import PageTitle from "../page-title"
import SEO from "../seo"
import PostHeader from "../posts/post-header"

const LayoutPage = ({
  children,
  title,
  seoData,
  postHeaderData,
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
    {postHeaderData && (
      <PostHeader
        title={postHeaderData.title}
        collection={postHeaderData.collection}
        date={postHeaderData.date}
        featuredimage={postHeaderData.featuredimage}
      />
    )}
    {children}
    <LayoutFooter />
  </div>
)

export default LayoutPage
