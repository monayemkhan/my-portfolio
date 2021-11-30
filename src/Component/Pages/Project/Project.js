import React from 'react';
import { Col } from 'react-bootstrap';
import './Project.css'

const Project = ({ portfolio }) => {
    const { name, live, img } = portfolio;

    return (
        <Col md={4} className=" mt-2">
            <div className=" box-item all-project text-center text-light mt-3"
                style={{ width: "23rem", height: "13rem", backgroundImage: `url(${img})`, backgroundSize: "cover", }}>
                <div className="single-project d-flex flex-column justify-content-center w-100 h-100 p-3">
                    <h6 className="fs-5 w-100 align-self-center project-btn">{name}</h6>
                    <a href={live} className="btn project-btn btn-outline-secondary w-50 fw-bold align-self-center">View Project</a>
                </div>
            </div>
        </Col>
    );
};

export default Project;