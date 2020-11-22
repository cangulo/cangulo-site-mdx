import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import SearchArea from "../components/search/search-area"

export default function Search() {
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
          <Layout title="Search" imgRelativePath="./page-search.jpg">
            <SearchArea searchIndex={data.siteSearchIndex.index} />
          </Layout>
        </header>
      )}
    />
  )
}
