import React from "react"
import LayoutContainer from "../components/layout/layout-container"
import LayoutPage from "../components/layout/layout-page"
import PageTitle from "../components/page-title"
import CollectionsList from "../components/series/collection-list"

const collectionPage = () => (
  <LayoutPage>
    <PageTitle title="Collections" imgRelativePath="./page-tags.jpg" />
    <LayoutContainer>
      <CollectionsList />
    </LayoutContainer>
  </LayoutPage>
)

export default collectionPage
