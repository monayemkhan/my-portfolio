import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Project from '../Project/Project';

const portfolios = [
    {
        id: 1,
        name: 'Honda-Bike Full-stack Web App',
        img: 'https://i.ibb.co/wW0fQv0/honda-bike.jpg',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 2,
        name: 'Mk-Global-Travel Web App',
        img: 'https://i.ibb.co/SwjKQTf/mk-global-travel.jpg',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 3,
        name: 'Heat-Care-Hospital Website',
        img: 'https://i.ibb.co/8MLXPHN/heart-care-hospital.jpg',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 4,
        name: 'Online-edu Web App Demo',
        img: 'https://i.ibb.co/R76WjsS/online-edu.jpg',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 5,
        name: 'Qatar-Concert Web Demo',
        img: 'https://i.ibb.co/xz6g2Mb/qatar-world-cup.jpg',
        live: '#',
        github: '#',
        server: '#',
    },
]


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
                        <Row className="ms-4">
                            {
                                // map portfolio data
                                portfolios.map(portfolio => <Project
                                    key={portfolio.id}
                                    portfolio={portfolio}
                                ></Project>
                                )
                            }
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