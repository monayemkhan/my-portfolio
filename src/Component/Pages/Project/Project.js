import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Project = () => {
    return (
        <div>
            <Container fluid className="home ">
                <Row>
                    <Col>
                        <Card className="text-center m-3">
                            <Card.Img className="images" variant="top" src="" />
                            <Card.Body>
                                <Card.Title className="fw-bold"></Card.Title>
                                <Card.Text>
                                    <p></p>
                                </Card.Text>
                                <Button variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;