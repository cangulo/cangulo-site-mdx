import React from "react"
import Layout from "../components/layout/layout"
import TagsList from "../components/tags/tags-list"

export default function PageTemplate() {
  return (
    <Layout
      title="Tags"
      imgRelativePath="./page-tags.jpg"
      sameTitleAsSEO="true"
    >
      <TagsList />
    </Layout>
  )
}
