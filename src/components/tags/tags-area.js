import React from "react"
import { kebabCase, startCase } from "lodash"
import { Link } from "gatsby"
import { Badge } from "react-bootstrap"

const TagArea = ({ tags, showBrowseAll }) => (
  <div style={{ marginTop: "10px" }}>
    {tags.map((tag, index) => (
      <Badge key={index} pill variant="info" style={{ marginRight: "15px" }}>
        <Link to={`/tags/${kebabCase(tag)}/`} style={{ color: "white" }}>
          {startCase(tag)}
        </Link>
      </Badge>
    ))}
    {showBrowseAll && (
      <Badge pill variant="primary">
        <Link to={`/tags/`} style={{ color: "white" }}>
          Browse All
        </Link>
      </Badge>
    )}
  </div>
)

export default TagArea
