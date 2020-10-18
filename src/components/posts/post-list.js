import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { CardDeck, Card } from 'react-bootstrap';

export default () => (
    <StaticQuery

        query={graphql`query {
        allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              slug
              frontmatter {
                title
                description
                date(formatString: "DD/MM/YYYY")
              }
            }
          }
        }
      }`
        }

        render={data => (
            <div>
                <CardDeck>
                    {data.allMdx.edges.map(({ node }) => (
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            {/* TODO, set image */}
                            <Card.Body>
                                <Card.Title>{node.frontmatter.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{node.frontmatter.date}</Card.Subtitle>
                                <hr></hr>
                                {/* TODO Concatenate the series associated */}
                                <Card.Text>
                                    {node.frontmatter.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            </div>
        )}

    />
)