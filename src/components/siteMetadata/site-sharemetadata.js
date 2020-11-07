import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const siteShareMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query getSiteShareInformation {
        site {
          siteMetadata {
            siteUrl
            twitterHandle
            HyvorTalkWebsiteId
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default siteShareMetadata
