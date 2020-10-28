import React from "react"
import { Alert } from "react-bootstrap"

const AlertRender = ({ type, children }) => (
  <Alert variant={type} style={{ textAlign: "center" }}>
    {children}
  </Alert>
)

export default AlertRender
