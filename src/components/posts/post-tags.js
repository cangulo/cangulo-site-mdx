import React from "react"
import TagArea from "../tags/tags-area"

const PostTags = ({ tags }) => {
  if (tags && tags.length > 0) {
    return (
      <section>
        <h2>Tags</h2>
        <TagArea tags={tags} showBrowseAll={true} />
      </section>
    )
  }
  return <div></div>
}

export default PostTags
