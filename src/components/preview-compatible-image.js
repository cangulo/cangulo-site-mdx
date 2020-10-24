import React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ image, alt }) => (
    <div style={{ width: '120px' }}>
        <Img fluid={image.childImageSharp.fluid} alt={alt} />
    </div>
)

export default PreviewCompatibleImage