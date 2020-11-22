import React, { Component } from "react"
import { Index } from "elasticlunr"
import SearchResultCard from "./searchresult-card"
import SearchResultList from "./searchresult-grid"
import _ from "lodash"

export default class SearchArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: this.props.searchQuery ?? ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={this.search}
          onLoad={this.search}
        />
        <SearchResultList>
          {this.state.results.map(result => (
            <SearchResultCard
              title={result.title}
              slug={result.slug}
              tags={result.tags}
              description={result.description}
              postType={result.postType}
              postSerie={result.postSerie}
              Key={result.id}
            />
          ))}
        </SearchResultList>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      results: this.index
        .search(query, { expand: true })
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
