import React from 'react'
import Header from './header'
import Footer from './footer'
import { Col, Row } from 'react-bootstrap'


export default ({ children }) => (
    <div>
        <Header />
        <Row>
            <Col></Col>
            <Col xs={10}>
                {children}
            </Col>
            <Col></Col>
        </Row>
        <Footer />
    </div>
)