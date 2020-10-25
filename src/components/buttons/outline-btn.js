import { Link } from "gatsby"
import React from "react"
import { Button } from "react-bootstrap"

const OutlineButton = ({ toLink, label }) => (
  <div style={{ textAlign: "center", margin: "25px" }}>
    <Link to={toLink}>
      <Button variant="outline-primary" style={{ fontSize: "30px" }}>
        {label}
      </Button>
    </Link>
  </div>
)

export default OutlineButton
