import React from "react"
import styles from "./tags-list.module.scss"
import Card from "../cards/card"
import CardBrowseAll from "../cards/card-browse-all"

const BaseTagsList = ({ tags, maxTagsToList, showBrowseAll }) => {
  const sortTagsBytotalCount = tags => {
    return tags.sort((x, y) => (x.totalCount < y.totalCount ? 1 : -1))
  }

  const tagsSorted = sortTagsBytotalCount(tags)
  const tagsSliced = tagsSorted.slice(0, maxTagsToList ?? tagsSorted.length)
  return (
    <div className={styles.container}>
      {tagsSliced.map((tag, index) => (
        <Card
          link={`/tags/${tag.fieldValue}/`}
          label={tag.fieldValue}
          key={index}
        />
      ))}
      {showBrowseAll && <CardBrowseAll link={`/tags`} label={`Browse All`} />}
    </div>
  )
}
export default BaseTagsList
