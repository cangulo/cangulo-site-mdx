import { graphql } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LayoutContainer from "../components/layout/layout-container"
import LayoutPage from "../components/layout/layout-page"
import PageTitle from "../components/page-title"
import PostRowList from "../components/posts/post-list-oriented/post-list-rows"
import HeaderLink from "../components/headers/header-link"
import MeetupsTagsList from "../components/tags/meetups-tags-list"

const PostListMeetups = ({ data, location }) => (
  <LayoutPage location={location}>
    <PageTitle title="Meetups" imgRelativePath="./meetups.jpg" />
    <LayoutContainer>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <PostRowList posts={data.allMdx.edges.map(x => x.node)} />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <HeaderLink to={`/tags`} title={"Tags"} />
            <MeetupsTagsList maxTagsToList={10} showBrowseAll={true} />
          </Col>
        </Row>
      </Container>
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
