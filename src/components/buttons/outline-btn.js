import { Link } from "gatsby"
import React from "react"
import { Button } from "react-bootstrap"

const OutlineButton = ({ toLink, label, textFont }) => (
  <div style={{ textAlign: "center", padding: "20px 0" }}>
    <Link to={toLink}>
      <Button variant="outline-primary" style={{ fontSize: textFont }}>
        {label}
      </Button>
    </Link>
  </div>
)

export default OutlineButton
