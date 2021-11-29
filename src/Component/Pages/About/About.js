import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const About = () => {
    return (
        // about section
        <Container fluid>
            <Row>
                <Col md={11}>
                    <Row className="">
                        <Col className="">
                            <h1 className="text-uppercase fw-bold text-center my-5">About Me</h1>
                        </Col>
                    </Row>
                    {/* personal info */}
                    <Row className="personal-info ps-5">
                        <Col className="">
                            <Row>
                                <Col><h2>Personal Information</h2></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Name: Md. Monaam Khan</p>
                                    <p>Age: 24 Years</p>
                                    <p>Freelance: Available</p>
                                    <p>Phone: (+880) 1709 291129</p>
                                    <p>Facebook: link..</p>
                                </Col>
                                <Col>
                                    <p>Nationality: Bangladesh</p>
                                    <p>Address: Khilkhet, Dhaka</p>
                                    <p>Email: monaamkhanet@gmail.com</p>
                                    <p>Langues: Bangla, English</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <h2>Skill</h2>
                            <Row>
                                <Col>
                                    <h6>HTML-5</h6>
                                    <h6>CSS-3</h6>
                                    <h6>BOOTSTRAP</h6>
                                    <h6>MATERIALS UI</h6>
                                    <h6>TAILWIND CSS</h6>
                                </Col>
                                <Col>
                                    <h6>JAVASCRIPT</h6>
                                    <h6>REACT.JS</h6>
                                    <h6>EXPRESS.JS</h6>
                                    <h6>NODE.JS</h6>
                                    <h6>MONGODB</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* my skill  */}
                    <Row className="ps-5">
                        <h2>Education</h2>
                        <Col className="">
                            <h3>Hi</h3>
                        </Col>
                        <Col>
                            <h3>Hi</h3>
                        </Col>
                        <Col>
                            <h3>Hi</h3>
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

export default About;