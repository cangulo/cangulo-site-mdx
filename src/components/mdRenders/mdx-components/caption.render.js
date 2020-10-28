import React from "react"
import { Link } from "gatsby"

const CaptionRender = ({ label, link, props }) => {
  if (link) {
    const urlToFile = link.includes("http") ? link : link
    console.log(props)
    // const urlToFile2
    //raw.githubusercontent.com/cangulo/cangulo-site-mdx/master/

    https: return (
      <Link to={urlToFile}>
        <p style={{ textAlign: "center" }}>{label ?? `Link to the file`}</p>
      </Link>
    )
  } else {
    return <p style={{ textAlign: "center" }}>{label ?? `Link to the file`}</p>
  }
}
