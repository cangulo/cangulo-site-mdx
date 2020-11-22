import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import SearchArea from "../components/search/search-area"

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
          <Layout
            title="Search"
            imgRelativePath="./page-search.jpg"
            hideSearchForm={true}
            location={location}
          >
            <SearchArea
              searchIndex={data.siteSearchIndex.index}
              searchQuery={location.state?.query ?? queryTextFromQueryString}
            />
          </Layout>
        </header>
      )}
    />
  )
}

export default SearchPage
