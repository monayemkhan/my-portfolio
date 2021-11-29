import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        // about section
        <Container fluid>
            <Row>
                <Col md={11}>
                    <Row className="">
                        <Col>
                            <h1 className="text-uppercase text-secondary fw-bold text-center my-5">About <span className="text-color">Me</span></h1>
                        </Col>
                    </Row>
                    {/* personal info */}
                    <Row className="personal-info ps-5">
                        <Col md={5} className="">
                            <Row>
                                <Col>
                                    <h3 className="fw-bold text-secondary">Personal Information</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="5">
                                    <p> <strong>Name:</strong>  Md. Monaam Khan</p>
                                    <p>Age: 24+</p>
                                    <p>Freelance: Available</p>
                                    <p>Nationality: Bangladesh</p>

                                </Col>
                                <Col md={7}>
                                    <p>Langues: Bangla, English</p>
                                    <p>Address: Khilkhet, Dhaka</p>
                                    <p>Phone: (+880) 1709 291129</p>
                                    <p>Email: monaamkhanet@gmail.com</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon className="text-secondary fs-4 me-3" icon={faFacebookSquare} />
                                    <FontAwesomeIcon className="text-secondary fs-4 me-3" icon={faLinkedin} />
                                    <FontAwesomeIcon className="text-secondary fs-4 me-3" icon={faGithubSquare} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={7}>
                            <h3 className="fw-bold text-secondary">Skill</h3>
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
                        <h3 className="fw-bold text-secondary">Education</h3>
                        <Col className="">
                            <div className="card">
                                <div class="card-body edu-bg-color">
                                    <h5 className="card-title text-light">B.Sc in (EEE)</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Fareast International University</h6>
                                    <p className="card-text text-light">jan 2018 - Apr 2021</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-body edu-bg-color">
                                    <h5 className="card-title text-light">Diploma in Electrical Engineering</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Ayub-Hena Polytechnic Institute</h6>
                                    <p className="card-text text-light">July 2011 - Dec 2015</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card edu-bg-color">
                                <div className="card-body">
                                    <h5 className="card-title text-light">secondary School Certificate (SSC) </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Karimganj Pilot High School</h6>
                                    <p className="card-text text-light">Jan 2006 - Dec 2011</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={1}>
                    <Sidebar></Sidebar>
                </Col>
            </Row >
        </Container >
    );
};

export default About;