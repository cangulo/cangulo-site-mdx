import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import PreviewCompatibleImage from '../custom-img';

const PostHeader = ({ title, subtitle, date, featuredimage }) => (
    <Container fluid style={{ paddingBlock:'40px' , backgroundColor: '#e9ecef'}}>
        <Row>
            <Col sm={10}>
                <h1 >{title}</h1>
                {subtitle ?? <h2>{subtitle}</h2>}
                {date ?? <i><p>{date}</p></i>}
            </Col>
            <Col sm={2}>
                {featuredimage && (
                    <PreviewCompatibleImage
                        image={featuredimage}
                        alt={title}
                    />)}
            </Col>
        </Row>
    </Container>
)

export default PostHeader