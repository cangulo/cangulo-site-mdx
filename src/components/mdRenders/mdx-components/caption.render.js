import React from "react"
import { Link } from "gatsby"

const CaptionRender = ({ link, label }) => {
  if (link) {
    const baseGitUrl =
      "https://raw.githubusercontent.com/cangulo/cangulo-site-mdx/master/"
    const urlToFile = link.includes("http") ? link : baseGitUrl.concat(link)

    https: return (
      <Link to={urlToFile}>
        <p style={{ textAlign: "center" }}>{label ?? `Link to the file`}</p>
      </Link>
    )
  } else {
    return <p style={{ textAlign: "center" }}>{label ?? `Link to the file`}</p>
  }
}

export default CaptionRender
