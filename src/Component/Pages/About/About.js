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
                        <Col md={6} className="">
                            <Row>
                                <Col>
                                    <h3 className="fw-bold text-secondary border-bottom border-dark">Personal Information</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col md="5">
                                    <p> <strong>Name:</strong>  Md. Monaam Khan</p>
                                    <p> <strong>Age:</strong> 24+</p>
                                    <p> <strong>Freelance:</strong> Available</p>
                                    <p> <strong>Nationality:</strong> Bangladesh</p>
                                </Col>
                                <Col md={7}>
                                    <p> <strong>Langues:</strong> Bangla, English</p>
                                    <p> <strong>Address:</strong> Khilkhet, Dhaka</p>
                                    <p> <strong>Phone:</strong> (+880) 1709 291129</p>
                                    <p> <strong>Email:</strong> monaamkhanet@gmail.com</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="text-center">
                                        <FontAwesomeIcon className="text-secondary fs-3 me-3" icon={faFacebookSquare} />
                                        <FontAwesomeIcon className="text-secondary fs-3 me-3" icon={faLinkedin} />
                                        <FontAwesomeIcon className="text-secondary fs-3 me-3" icon={faGithubSquare} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <h3 className="fw-bold text-secondary border-bottom border-dark">Skill</h3>
                            <Row className="mt-3">
                                <Col>
                                    <h6>HTML-5</h6>
                                    <h6>CSS-3</h6>
                                    <h6>BOOTSTRAP</h6>
                                    <h6>MATERIAL UI</h6>
                                    <h6>TAILWIND CSS</h6>
                                </Col>
                                <Col>
                                    <h6>JAVASCRIPT</h6>
                                    <h6>REACT.JS</h6>
                                    <h6>EXPRESS.JS</h6>
                                    <h6>NODE.JS</h6>
                                    <h6>MONGODB</h6>
                                </Col>
                                <Col>
                                    <h6>ES6</h6>
                                    <h6>FIREBASE</h6>
                                    <h6>REST API</h6>
                                    <h6>CHROME DEV TOOLS</h6>
                                    <h6>GIT BUSH</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* my skill  */}
                    <Row className="ps-5">
                        <h3 className="fw-bold text-secondary mt-3">Education</h3>
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
                                    <p className="card-text text-light">2011-12 - 2015</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card edu-bg-color">
                                <div className="card-body">
                                    <h5 className="card-title text-light">Secondary School Certificate (SSC) </h5>
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