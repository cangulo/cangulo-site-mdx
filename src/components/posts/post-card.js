import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import PreviewCompatibleImage from '../preview-compatible-image';

const PostCard = ({ title, date, description, img }) => (
    <Card style={{ minWidth: '300px', marginBottom: '20px' }}>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}

        <Card.Body>
            <Container fluid>
                <Row>
                    <Col xs={10}>
                        <Card.Title>{title}</Card.Title>
                        {date && <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>}
                        {/* <Card.Subtitle className="mb-2 text-muted">{node.fields.postType}</Card.Subtitle> */}
                    </Col>
                    <Col xs={2}>
                        <div style={{ float: "right" }}>
                            <PreviewCompatibleImage
                                image={img}
                                alt={title}
                                width={'60px'}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            {/* TODO Concatenate the series associated */}
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default PostCard