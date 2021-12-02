import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import image from '../../../images/mk.jpg';

const Home = () => {
    return (
        <Container fluid className="home ">
            <div className="bg-style"></div>
            <Row className="align-items-center">
                <Col md={5} className="align-items-center">
                    <div className="rounded-3 my-4 p-3 align-items-center home-img">
                        <img className="home-img" src={image} alt="" />
                    </div>
                </Col>
                <Col md={6} >
                    <div className="home-text">
                        <div className="">
                            <h1 className="text-uppercase fw-bold name-color"> ___ I'm Md. Monaam Khan</h1>
                            <h3 className="text-uppercase text-secondary fw-bold fst-italic">Web Developer</h3>
                            <p>I'm a Bangladeshi-based Web Designer and Full Stack (MERN) Developer with 6 months of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages.</p>
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
                <Col md={1} className="">
                    <div className="">
                        <Sidebar></Sidebar>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Home;