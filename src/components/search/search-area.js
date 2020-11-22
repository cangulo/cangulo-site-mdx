import React, { Component } from "react"
import { Index } from "elasticlunr"
import SearchResultCard from "./searchresult-card"
import SearchResultList from "./searchresult-grid"

export default class SearchArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.search} />
        <SearchResultList>
          {this.state.results.map(result => (
            <SearchResultCard
              title={result.title}
              slug={result.slug}
              id={result.id}
              tags={result.tags}
              description={result.description}
              postType={result.postType}
              postSerie={result.postSerie}
            />
          ))}
        </SearchResultList>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
