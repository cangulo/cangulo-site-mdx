import { StaticQuery } from "gatsby"
import React from "react"
import styles from "./tags-list.module.scss"
import TagCard from "./tag-card"
import TagCardBrowseAll from "./tag-card-browse-all"

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
              edges {
                node {
                  frontmatter {
                    title
                  }
                }
              }
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
            {showBrowseAll && <TagCardBrowseAll />}
          </div>
        )
      }}
    />
  )
}
export default TagsList
