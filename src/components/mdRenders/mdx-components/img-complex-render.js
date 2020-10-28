import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./img-complex-render.module.scss"

// Dont use this component: Reason
//  The only way to do it is to get all the images
//  and filter by the img File Name provided
const ImgComplexRender = ({ caption, imgFileName, imgRegexFileName }) => (
  <StaticQuery
    query={graphql`
      query MyQuery($imgFileName: String) {
        allImageSharp(filter: { fixed: { src: { regex: $imgFileName } } }) {
          edges {
            node {
              fixed {
                src
                srcSet
              }
            }
          }
        }
      }
    `}
    render={data => {
      if (imgFileName) {
        const fileNameLowerCase = imgFileName.toLocaleLowerCase()
        const imgData = data.allImageSharp.edges.filter(x =>
          x.node.fixed.src.toLocaleLowerCase().includes(fileNameLowerCase)
        )[0]?.node.fixed

        return (
          <img
            alt={caption}
            src={imgData.src}
            srcSet={imgData.srcSet}
            className={`gatsby-resp-image-image`}
            sizes="(max-width: 1500px) 100vw, 1500px"
            loading="lazy"
          />
        )
      }
    }}
  />
)

export default ImgComplexRender
