import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import image from '../../../images/mk.jpg';

const Home = () => {
    return (
        <div>
            <Container fluid className="home ">
                <Row>
                    <Col md={11}>
                        <Row>
                            <Col md={5}>
                                <div className="bg-style"></div>
                                <div className="rounded-3 ps-4 my-4 home-img">
                                    <img className="" src={image} alt="" />
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className="align-middle p-3">
                                    <div className="align-middle">
                                        <h1 className="text-uppercase fw-bold name-color"> ___ I'm Md. Monaam Khan</h1>
                                        <h3 className="text-uppercase text-secondary fw-bold fst-italic">Web Developer</h3>
                                        <p>I'm a Bangladeshi-based Web Designer and Full Stack (MERN) Developer with 0.6 years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages.</p>
                                    </div>
                                    <Button className="rounded-pill fw-bold resume-btn">
                                        <a className="text-decoration-none text-uppercase btn-text"
                                            href="https://drive.google.com/file/d/18BCvj_DSTo1Urmkykm4tvJqMbluLn3sy/view?usp=sharing"
                                            download
                                        >
                                            Download Resume
                                        </a>
                                        <FontAwesomeIcon className="icon-color fs-5 ms-3" icon={faDownload} />
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>
                        <Sidebar></Sidebar>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default Home;