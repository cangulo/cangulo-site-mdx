import React from "react"
import LayoutContainer from "../components/layout/layout-container"
import LayoutPage from "../components/layout/layout-page"
import TagsList from "../components/tags/tags-list"

const tagsPage = () => (
  <LayoutPage title="Tags" imgRelativePath="./page-tags.jpg">
    <LayoutContainer>
      <TagsList />
    </LayoutContainer>
  </LayoutPage>
)
export default tagsPage
