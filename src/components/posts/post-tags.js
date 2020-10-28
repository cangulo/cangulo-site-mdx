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
          {tags.map(tag => (
            <Badge pill variant="info" style={{ marginRight: "15px" }}>
              {/* <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://source.unsplash.com/960x200/?' + post.frontmatter.keywords + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '30px' }}></div> */}
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
