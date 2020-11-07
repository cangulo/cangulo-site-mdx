import React from "react"
import siteShareMetadata from "../siteMetadata/site-sharemetadata"
import HyvorTalk from "hyvor-talk-react"

const PostComments = ({ slug }) => {
  const { HyvorTalkWebsiteId } = siteShareMetadata()

  return (
    <section>
      <h2>Comments</h2>
      <HyvorTalk.Embed
        loadMode="scroll"
        websiteId={HyvorTalkWebsiteId}
        id={slug}
      />
    </section>
  )
}
export default PostComments
