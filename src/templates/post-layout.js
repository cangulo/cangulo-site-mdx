import React from "react"
import { graphql } from "gatsby"
import LayoutPage from "../components/layout/layout-page"
import PostTags from "../components/posts/post-tags"
import PostReferences from "../components/posts/post-references"
import MdxProvider from "../components/mdRenders/mdx-provider"
import PaginationPost from "../components/pagination/pagination-post"
import AboutMeArea from "../components/aboutme/aboutme-area"
import PostShare from "../components/posts/post-share"
import { Col, Container, Row } from "react-bootstrap"
import PostComments from "../components/posts/post-comments"
import LayoutContainer from "../components/layout/layout-container"
import PostHeader from "../components/posts/post-header"
import PostResources from "../components/posts/post-resources"

const HrLineSeparation = () => <hr style={{ margin: "10px 0" }} />

export default function PageTemplate({ data: { mdx }, pageContext }) {
  return (
    <LayoutPage
      seoData={{
        title: mdx.frontmatter.title,
        description: mdx.frontmatter.description,
        image: mdx.frontmatter.img?.childImageSharp.fluid.src,
        article: true,
      }}
    >
      <PostHeader
        title={mdx.frontmatter.title}
        collection={mdx.fields?.postSerie}
        date={mdx.frontmatter.date}
        featuredimage={mdx.frontmatter.img}
        resources={mdx.frontmatter.resources}
      />
      <LayoutContainer>
        <MdxProvider mdxContent={mdx.body} />
        <HrLineSeparation />
        <AboutMeArea />

        <HrLineSeparation />
        <Container style={{ padding: 0 }} fluid>
          <Row>
            <Col md>
              <PostTags tags={mdx.frontmatter?.tags} />
            </Col>
            <Col md>
              <PostShare
                slug={mdx.slug}
                title={mdx.frontmatter.title}
                description={mdx.frontmatter.description}
                tags={mdx.frontmatter?.tags}
              />
            </Col>
          </Row>
        </Container>

        {mdx.frontmatter?.references && (
          <div>
            <HrLineSeparation />
            <PostReferences references={mdx.frontmatter.references} />
          </div>
        )}
        {mdx.frontmatter?.resources && (
          <div>
            <HrLineSeparation />
            <PostResources resources={mdx.frontmatter.resources} />
          </div>
        )}

        <HrLineSeparation />
        <PostComments slug={mdx.slug} />
        <HrLineSeparation />
        <PaginationPost
          previousPostSlug={pageContext.nextPostSlug}
          nextPostSlug={pageContext.previousPostSlug}
        />
      </LayoutContainer>
    </LayoutPage>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      slug
      frontmatter {
        title
        description
        date(formatString: "DD/MM/YYYY")
        tags
        img {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        references
        resources {
          type
          title
          description
          link
        }
      }
      fields {
        postType
        postSerie
      }
    }
  }
`
