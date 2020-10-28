import { graphql, StaticQuery } from "gatsby"
import React from "react"
import styles from "./collection-list.module.scss"
import CardBrowseAll from "../cards/card-browse-all"
import Card from "../cards/card"

const CollectionsList = ({ maxCollectionsToList, showBrowseAll }) => {
  const sortCollectionsBytotalCount = collections => {
    return collections.sort((x, y) => (x.totalCount < y.totalCount ? 1 : -1))
  }

  return (
    <StaticQuery
      query={graphql`
        query TopSeriesAndPostsNumber {
          allMdx {
            group(field: fields___postSerie) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => {
        const colsSorted = sortCollectionsBytotalCount(data.allMdx.group)
        const colsSliced = colsSorted.slice(
          0,
          maxCollectionsToList ?? colsSorted.length
        )
        return (
          <div className={styles.container}>
            {colsSliced.map(tag => (
              <Card tagName={tag.fieldValue} numPostsTagged={tag.totalCount} />
            ))}
            {showBrowseAll && (
              <CardBrowseAll link={`/collections`} label={`Browse all`} />
            )}
          </div>
        )
      }}
    />
  )
}
export default CollectionsList
