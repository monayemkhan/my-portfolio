import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Projects = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={11}>
                        <Row>
                            <Col>
                                <h1 className="text-uppercase text-secondary fw-bold text-center my-5">My <span className="text-color">Portfolio</span></h1>
                            </Col>
                        </Row>
                        <Row className="ps-5">
                            <Col className="">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>
                        <Sidebar></Sidebar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;