import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import SearchArea from "../components/search/search-area"

export default class SearchPage extends Component {
  constructor(props) {
    super(props)
    // this.query = this.props.params
    this.query = `auto`
  }

  render() {
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
              <SearchArea
                searchIndex={data.siteSearchIndex.index}
                searchQuery={this.query}
              />
            </Layout>
          </header>
        )}
      />
    )
  }
}
