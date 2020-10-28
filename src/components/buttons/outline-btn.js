import { Link } from "gatsby"
import React from "react"
import { Button } from "react-bootstrap"

const OutlineButton = ({ toLink, label, textFont }) => (
  <div style={{ textAlign: "center" }}>
    <Link to={toLink}>
      <Button variant="outline-primary" style={{ fontSize: textFont }}>
        {label}
      </Button>
    </Link>
  </div>
)

export default OutlineButton
