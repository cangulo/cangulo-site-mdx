import React from "react"
import siteShareMetadata from "../siteMetadata/site-sharemetadata"
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share"

const PostShare = ({ slug, title, description, tags }) => {
  const { siteUrl, twitterHandle } = siteShareMetadata()
  const fullUrl = `${siteUrl}${slug}`
  return (
    <div>
      <h3>Did you like it? Share it:</h3>
      <TwitterShareButton
        url={fullUrl}
        title={title}
        via={twitterHandle.split("@").join("")}
        hashtags={tags ?? ``}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton url={fullUrl} title={title}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <EmailShareButton
        subject={`Check this post about ${title}`}
        body={`${description}\n\n`}
        url={fullUrl}
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <WhatsappShareButton
        url={fullUrl}
        className="button is-outlined is-rounded whatsapp"
        title={title}
      >
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <RedditShareButton
        url={fullUrl}
        className="button is-outlined is-rounded reddit"
        title={title}
      >
        <RedditIcon size={32} round={true} />
      </RedditShareButton>
      <FacebookShareButton url={fullUrl}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </div>
  )
}
export default PostShare
