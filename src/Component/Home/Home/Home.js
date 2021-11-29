import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import image from '../../../images/mk.jpg';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Container fluid className="home ">
                <Row>
                    <Col md={11}>
                        <Row>
                            <Col md={5}>
                                <div className="rounded-3 ps-4 my-4 home-img">
                                    <img className="" src={image} alt="" />
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className="vertical-align-center p-3">
                                    <h1 className="text-uppercase fw-bold">I'm Md. Monaam Khan</h1>
                                    <h3 className="text-uppercase fw-bold fst-italic">Web Developer</h3>
                                    <p>Full Stack (MERN) Developer with 0.6 years of hands-on
                                        experience designing, developing and implementing applications
                                        and solutions using a range of technologies and programming
                                        languages.</p>
                                    <Button className="rounded-pill">Download Resume</Button>
                                </div>
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

export default Home;