import React from "react"
import { kebabCase } from "lodash"
import { Link } from "gatsby"
import { Badge } from "react-bootstrap"

const PostTags = ({ tags }) => {
  if (tags && tags.length > 0) {
    return (
      <section>
        <h2>Tags</h2>
        <div style={{ marginTop: "10px" }}>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              pill
              variant="info"
              style={{ marginRight: "15px" }}
            >
              <Link to={`/tags/${kebabCase(tag)}/`} style={{ color: "white" }}>
                {tag}
              </Link>
            </Badge>
          ))}
          <Badge pill variant="primary">
            <Link to={`/tags/`} style={{ color: "white" }}>
              Browse All
            </Link>
          </Badge>
        </div>
      </section>
    )
  }
  return <div></div>
}

export default PostTags
