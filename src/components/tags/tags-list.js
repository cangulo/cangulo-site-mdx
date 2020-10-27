import { StaticQuery } from "gatsby"
import React from "react"
import styles from "./tags-list.module.scss"
import TagCard from "./tag-card"

const TagsList = ({ maxTagsToList }) => {
  const sortTagsBytotalCount = tags => {
    return tags.sort((x, y) => (x.totalCount < y.totalCount ? 1 : -1))
  }

  return (
    <StaticQuery
      query={graphql`
        query TopTagsAndPostsNumber {
          allMdx(limit: 10) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => {
        const tagsSorted = sortTagsBytotalCount(data.allMdx.group)
        const tagsSliced = tagsSorted.slice(
          0,
          maxTagsToList ?? tagsSorted.length
        )
        return (
          <div className={styles.container}>
            {tagsSliced.map(tag => (
              <TagCard
                tagName={tag.fieldValue}
                numPostsTagged={tag.totalCount}
              />
            ))}
          </div>
        )
      }}
    />
  )
}
export default TagsList
