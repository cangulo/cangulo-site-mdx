import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { CardDeck } from 'react-bootstrap';
import PostCard from './post-card';

export default ({ postType }) => (
  <StaticQuery
    query={graphql`
    {
      allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
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

    render={data => (
      <CardDeck>
        {data.allMdx.edges
          .filter(({ node }) => node.fields.postType === postType)
          .map(({ node }) => (
            <PostCard
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              img={node.frontmatter.img}
              link={node.slug} />
          ))}
      </CardDeck>
    )}

  />
)