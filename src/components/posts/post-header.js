import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import PreviewCompatibleImage from '../preview-compatible-image';

const PostHeader = ({ title, subtitle, date, featuredimage }) => (
    <Jumbotron fluid>
        <Container fluid>
            <Row>
                <Col md={10} >
                    <h1 >{title}</h1>
                    {subtitle && <h2>{subtitle}</h2>}
                    {date && <i><p>{date}</p></i>}
                </Col>
                <Col md={2} >
                    <div style={{ float: "right" }}>
                        {featuredimage && (
                            <PreviewCompatibleImage
                                image={featuredimage}
                                alt={title}
                            />)}
                    </div>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
)

export default PostHeader