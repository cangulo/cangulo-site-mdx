import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"
import BasePostListPer from "./base-post-list-per"

export default function PageTemplate({ data, pageContext }) {
  const collection = pageContext.collection
  return (
    <BasePostListPer
      posts={data.allMdx.edges.map(x => x.node)}
      pageTitle={`Collection ${_.startCase(collection)}`}
      imgRelativePath="./collections.jpg"
      browseAllLink="/collections"
      browseAllMessage="Browse all the collections"
    />
  )
}

export const pageQuery = graphql`
  query PostPerCollection($collection: String) {
    allMdx(filter: { fields: { postSerie: { eq: $collection } } }) {
      edges {
        node {
          slug
          fields {
            postType
          }
          frontmatter {
            title
            description
            date(formatString: "DD/MM/YYYY")
            img {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
