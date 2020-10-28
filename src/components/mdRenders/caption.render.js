import React from "react"
import { Link } from "gatsby"

const CaptionRender = ({ label, link }) => {
  if (link) {
    return (
      <Link to={link}>
        <p style={{ textAlign: "center" }}>{label ?? `Link to the file`}</p>
      </Link>
    )
  } else {
    return <p style={{ textAlign: "center" }}>{label ?? `Link to the file`}</p>
  }
}

export default CaptionRender
