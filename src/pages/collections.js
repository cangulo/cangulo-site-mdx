import React from "react"
import Layout from "../components/layout/layout"
import CollectionsList from "../components/series/collection-list"

const collectionPage = () => (
  <Layout title="Collections" imgRelativePath="./page-tags.jpg">
    <CollectionsList />
  </Layout>
)

export default collectionPage
