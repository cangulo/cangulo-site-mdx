import React from "react"
import { graphql } from "gatsby"
import BasePostListPer from "./base-post-list-per"

export default function PageTemplate({ data, pageContext }) {
  const tag = pageContext.tag
  return (
    <BasePostListPer
      posts={data.allMdx.edges.map(x => x.node)}
      pageTitle={`Posts tagged with ${tag}`}
      imgRelativePath="./page-tags.jpg"
      browseAllLink="/tags"
      browseAllMessage="Browse all the tags"
    />
  )
}

export const pageQuery = graphql`
  query PostPerTag($tag: String) {
    allMdx(filter: { frontmatter: { tags: { eq: $tag } } }) {
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
