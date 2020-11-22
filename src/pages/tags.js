import React from "react"
import Layout from "../components/layout/layout"
import TagsList from "../components/tags/tags-list"

const tagsPage = () => (
  <Layout title="Tags" imgRelativePath="./page-tags.jpg">
    <TagsList />
  </Layout>
)
export default tagsPage
