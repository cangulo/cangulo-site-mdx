import { graphql, StaticQuery } from "gatsby"
import React from "react"
import _ from "lodash"
import styles from "./tags-list.module.scss"
import Card from "../cards/card"
import CardBrowseAll from "../cards/card-browse-all"

const TagsList = ({ maxTagsToList, showBrowseAll }) => {
  const sortTagsBytotalCount = tags => {
    return tags.sort((x, y) => (x.totalCount < y.totalCount ? 1 : -1))
  }

  return (
    <StaticQuery
      query={graphql`
        query TopTagsAndPostsNumber {
          allMdx {
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
              <Card
                link={`/tags/${_.kebabCase(tag.fieldValue)}/`}
                label={tag.fieldValue}
                numPosts={tag.totalCount}
              />
            ))}
            {showBrowseAll && (
              <CardBrowseAll link={`/tags`} label={`Browse All`} />
            )}
          </div>
        )
      }}
    />
  )
}
export default TagsList
