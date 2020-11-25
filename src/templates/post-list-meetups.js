import { graphql } from "gatsby"
import React from "react"
import LayoutContainer from "../components/layout/layout-container"
import LayoutPage from "../components/layout/layout-page"
import PostRowList from "../components/posts/post-list-oriented/post-list-rows"

const PostListMeetups = ({ data, location }) => (
  <LayoutPage
    title="Meetups"
    imgRelativePath="./meetups.jpg"
    location={location}
  >
    <LayoutContainer>
      <PostRowList posts={data.allMdx.edges.map(x => x.node)} />
    </LayoutContainer>
  </LayoutPage>
)

export default PostListMeetups

export const pageQuery = graphql`
  query MeetupsPostsPaginated($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fields: { postType: { eq: "meetups" } } }
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
