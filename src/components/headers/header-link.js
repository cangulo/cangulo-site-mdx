import { Link } from "gatsby"
import React from "react"

const HeaderLink = ({ to, title }) => (
  <Link to={to} style={{ color: "inherit" }}>
    <div style={{ marginBottom: "20px" }}>
      <h1>{title}</h1>
    </div>
  </Link>
)

export default HeaderLink
