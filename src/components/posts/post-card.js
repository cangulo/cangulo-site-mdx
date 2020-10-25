import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import PreviewCompatibleImage from '../preview-compatible-image';

const PostCard = ({ title, date, description, img, link }) => (
    <Card style={{ minWidth: '300px', maxWidth: '500px', minHeight: '200px', maxHeight: '300px', marginBottom: '20px' }}>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <PreviewCompatibleImage
                            image={img}
                            alt={title}
                            width={'100px'}
                        />
                    </Col>
                    <Col xs={8}>
                        <Card.Title>{title}</Card.Title>
                        {date && <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>}
                        {/* <Card.Subtitle className="mb-2 text-muted">{node.fields.postType}</Card.Subtitle> */}
                        <hr></hr>

                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Link href={link}>
                            <Button variant="primary">
                                Read it
                </Button>
                        </Card.Link>
                    </Col>
                </Row>
            </Container>
            {/* TODO Concatenate the series associated */}

        </Card.Body>
    </Card >
)

export default PostCard