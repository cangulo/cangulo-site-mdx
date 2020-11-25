import { graphql } from "gatsby"
import React from "react"
import LayoutContainer from "../components/layout/layout-container"
import LayoutPage from "../components/layout/layout-page"
import PageTitle from "../components/page-title"
import PaginationList from "../components/pagination/pagination-list"
import PostGridList from "../components/posts/post-list-oriented/post-list-grid"

const PostListCheatsheets = props => (
  <LayoutPage location={props.location}>
    <PageTitle
      title="Cheatsheets"
      subtitle="save your time using them 😁️"
      imgRelativePath="./cheatsheet.jpg"
    />
    <LayoutContainer>
      <PostGridList
        posts={props.data.allMdx.edges.map(x => x.node)}
        numColumns={3}
      />
      <PaginationList
        pageNumber={props.pageContext.pageNumber}
        numberOfPages={props.pageContext.numberOfPages}
        preffixPath="/cheatsheets"
      />
    </LayoutContainer>
  </LayoutPage>
)

export default PostListCheatsheets

export const pageQuery = graphql`
  query CheatsheetsPostsPaginated($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fields: { postType: { eq: "cheatsheets" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          slug
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
