import React from "react"
import siteShareMetadata from "../siteMetadata/site-sharemetadata"

const PostShare = ({ slug, title, description, tags }) => {
  const { siteUrl, twitterHandle } = siteShareMetadata()
  const fullUrl = `${siteUrl}${slug}`
  return <div></div>
}
export default PostShare
