import { graphql, StaticQuery } from "gatsby"
import React from "react"
import BaseTagsList from "./base-tags-list"

const MeetupsTagsList = ({ maxTagsToList, showBrowseAll }) => {
  return (
    <StaticQuery
      query={graphql`
        query MeetupTagsAndPostsNumber {
          allMdx(filter: { fields: { postType: { eq: "meetups" } } }) {
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
export default MeetupsTagsList
