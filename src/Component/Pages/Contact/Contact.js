import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f929rum', 'template_nehegow', form.current, 'user_jgSgVzroE7ALaAuJku13b')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container fluid>
            <Row>
                <Col md={11}>
                    <Row>
                        <Col>
                            <h1 className="text-uppercase fw-bold text-secondary text-center my-5">Contact <span className="text-color">Me</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="ps-5">
                            <div>
                                <h4>DON'T BE SHY !</h4>
                                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                                <div className="address mt-4 ">
                                    <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faMap} />Address Point</h5>
                                    <h6 className="mx-5 text-secondary"> BKash-Bhaban, Beparipara Road, Khilkhet-1229</h6>
                                    <p className="mx-5 text-secondary">Dhaka, Bangladesh</p>
                                </div>
                                <div className="address">
                                    <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faEnvelope} />Mail Me</h5>
                                    <p className="mx-5 text-secondary">monaamkhanet@gmail.com</p>
                                </div>
                                <div className="address my-1">
                                    <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faPhone} />Call Me</h5>
                                    <p className="mx-5 text-secondary">+880 1709 291129</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <h4 className="">Get in Touch</h4>
                                <div>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="input-group mt-4">
                                            <input className="form-control border-0 border-bottom me-3" placeholder="Your Name *" type="text" />
                                            <input className="form-control border-0 border-bottom me-3" placeholder="Email *" type="text" />
                                        </div>
                                        <div className="input-group mt-4">
                                            <input className="form-control border-0 border-bottom me-3" placeholder="phone *" type="text" />
                                            <input className="form-control border-0 border-bottom me-3" placeholder="Subject" type="text" />
                                        </div>
                                        <div className="input-group mt-4">
                                            <textarea className="form-control" placeholder="Massage *" name="" id="" style={{ height: '150px' }}></textarea>
                                        </div>
                                        <div className="input-group mt-4">
                                            <input className="btn btn-danger fw-bold" type="submit" value="Send Me" />
                                        </div>
                                    </form>
                                </div>
                            </div>
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

export default Contact;