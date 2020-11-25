import React from "react"
import siteMetadata from "../../siteMetadata/site-metadata"
import { Image } from "react-bootstrap"

const AwsCertifiedDeveloperAssociate = () => {
  const { siteUrl } = siteMetadata()
  return (
    <a href="https://www.youracclaim.com/badges/80e4c7dd-56c7-451a-8e76-d138e1158e75/public_url">
      <Image
        style={{ width: "180px" }}
        src={`${siteUrl}/certifications/aws-certified-developer-associate.png`}
        alt="AWS Certified Developer Associate"
      />
    </a>
  )
}

export default AwsCertifiedDeveloperAssociate
