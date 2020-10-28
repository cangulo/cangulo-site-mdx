import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { orientationList } from "../../models/orientationList"
import PostGridList from "./post-list-oriented/post-list-grid"
import PostRowList from "./post-list-oriented/post-list-rows"

const PostList = ({ postType, orientation, numColumns, limit }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
                fields {
                  postType
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posts = data.allMdx.edges
          .filter(({ node }) => node.fields.postType === postType)
          .map(x => x.node)
        const postsSliced = posts.slice(0, limit ?? posts.length)
        if (orientation === orientationList.vertical) {
          return <PostRowList posts={postsSliced} />
        } else {
          return <PostGridList posts={postsSliced} numColumns={numColumns} />
        }
      }}
    />
  )
}

export default PostList
