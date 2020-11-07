import React from "react"
import Layout from "../components/layout/layout"
import CollectionsList from "../components/series/collection-list"

export default function PageTemplate() {
  return (
    <Layout
      title="Collections"
      imgRelativePath="./page-tags.jpg"
      sameTitleAsSEO="true"
    >
      <CollectionsList />
    </Layout>
  )
}
