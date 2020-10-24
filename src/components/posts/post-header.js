import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import PreviewCompatibleImage from '../custom-img';

const PostHeader = ({ title, subtitle, date, featuredimage }) => (
    <Jumbotron fluid>
        <Container fluid>
            <Row>
                <Col xs={12} md={8}>
                    <h1 >{title}</h1>
                    {subtitle && <h2>{subtitle}</h2>}
                    {date && <i><p>{date}</p></i>}
                </Col>
                <Col s={6} md={4}>
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