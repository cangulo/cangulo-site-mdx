import React from 'react'
import Header from './header'
import Footer from './footer'
import { Col, Container, Row } from 'react-bootstrap'


const Layout = ({ children }) => (
    <div>
        <Header />

        <Container fluid>
            <Row>
                <Col />
                <Col md={11}>
                    {children}
                </Col>
                <Col />
            </Row>
        </Container>
        <Footer />

    </div>
)

export default Layout