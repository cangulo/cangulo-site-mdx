import React from "react"
import Img from "gatsby-image"

const PreviewCompatibleImage = ({ image, alt, width }) =>
  image &&
  image.childImageSharp && (
    <div style={{ width: width ?? "75px" }}>
      <Img fluid={image.childImageSharp.fluid} alt={alt && ``} />
    </div>
  )

export default PreviewCompatibleImage
