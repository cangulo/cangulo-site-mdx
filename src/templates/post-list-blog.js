import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import TagsList from "../components/tags/tags-list"
import HeaderLink from "../components/headers/header-link"
import CollectionsList from "../components/series/collection-list"
import PostRowList from "../components/posts/post-list-oriented/post-list-rows"
import PaginationList from "../components/pagination/pagination-list"

const PostListBlog = props => (
  <Layout title="Posts" imgRelativePath="./blog.jpg" sameTitleAsSEO="true">
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8}>
          <PostRowList posts={props.data.allMdx.edges.map(x => x.node)} />
          <PaginationList
            pageNumber={props.pageContext.pageNumber}
            numberOfPages={props.pageContext.numberOfPages}
            preffixPath="/blog"
          />
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <HeaderLink to={`/tags`} title={"Tags"} />
          <TagsList maxTagsToList={10} showBrowseAll={true} />

          <HeaderLink to={`/collections`} title={"Collections"} />
          <CollectionsList maxCollectionsToList={10} showBrowseAll={true} />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default PostListBlog

export const pageQuery = graphql`
  query BlogPostsPaginated($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fields: { postType: { eq: "blog" } } }
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
