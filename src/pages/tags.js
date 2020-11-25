import React from "react"
import LayoutContainer from "../components/layout/layout-container"
import LayoutPage from "../components/layout/layout-page"
import PageTitle from "../components/page-title"
import TagsList from "../components/tags/tags-list"

const tagsPage = () => (
  <LayoutPage t>
    <PageTitle title="Tags" imgRelativePath="./page-tags.jpg" />
    <LayoutContainer>
      <TagsList />
    </LayoutContainer>
  </LayoutPage>
)
export default tagsPage
