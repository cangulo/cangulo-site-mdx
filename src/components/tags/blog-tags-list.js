import { graphql, StaticQuery } from "gatsby"
import React from "react"
import BaseTagsList from "./base-tags-list"

const BlogTagsList = ({ maxTagsToList, showBrowseAll }) => {
  return (
    <StaticQuery
      query={graphql`
        query BlogTagsAndPostsNumber {
          allMdx(filter: { fields: { postType: { eq: "blog" } } }) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => (
        <BaseTagsList
          tags={data.allMdx.group}
          maxTagsToList={maxTagsToList}
          showBrowseAll={showBrowseAll}
        />
      )}
    />
  )
}
export default BlogTagsList
