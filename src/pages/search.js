import React from "react"
import { graphql, StaticQuery } from "gatsby"
import LayoutPage from "../components/layout/layout-page"
import SearchArea from "../components/search/search-area"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"

const SearchPage = ({ location }) => {
  const queryTextFromQueryString = location.search.split("?s=")[1]
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        <header>
          <LayoutPage location={location}>
            <PageTitle title="Search" imgRelativePath="./page-search.jpg" />
            <LayoutContainer>
              <SearchArea
                searchIndex={data.siteSearchIndex.index}
                searchQuery={location.state?.query ?? queryTextFromQueryString}
              />
            </LayoutContainer>
          </LayoutPage>
        </header>
      )}
    />
  )
}

export default SearchPage
