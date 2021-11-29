import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Blogs = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={11}>
                    <Row>
                        <Col>
                            <h1 className="text-uppercase fw-bold text-secondary text-center my-5">My <span className="text-color">Blogs</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="text-center fw-bold">Blogs Coming Soon ...</h2>
                        </Col>
                    </Row>
                </Col>
                <Col md={1}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;