import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout/layout"
import PostRowList from "../components/posts/post-list-oriented/post-list-rows"

const PostListMeetups = ({ data }) => (
  <Layout title="Meetups" imgRelativePath="./meetups.jpg">
    <PostRowList posts={data.allMdx.edges.map(x => x.node)} />
  </Layout>
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
