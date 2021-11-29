import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faDownload, faEnvelopeOpen, faHouseUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                <ul className="sidebar-icon d-md-flex flex-md-column d-sm-flex flex-sm-row d-flex flex-row list-unstyled">
                    <NavLink to="/home" className=" text-decoration-none">
                        <li className="icon-box my-4 side text-decoration-none">
                            <FontAwesomeIcon className="text-secondary text-center fs-6 ms-3" icon={faHouseUser} />
                            <div className="dis">Home</div>
                        </li>
                    </NavLink>
                    <NavLink to="/about" className="text-decoration-none ">
                        <li className="icon-box my-4 text-center side text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-6 ms-3" icon={faUser} />
                            <div className="dis">About</div>
                        </li>
                    </NavLink>
                    <NavLink to="/projects" className="text-decoration-none">
                        <li className="icon-box my-4 text-center side text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-6 ms-3" icon={faBriefcase} />
                            <div className="dis">Protfolio</div>
                        </li>
                    </NavLink>
                    <NavLink to="/contact" className="text-decoration-none">
                        <li className="icon-box my-4 text-center side text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-6 ms-3" icon={faEnvelopeOpen} />
                            <div className="dis">Contact</div>
                        </li>
                    </NavLink>
                    <NavLink to="/resume" className="text-decoration-none">
                        <li className="icon-box my-4 text-center side text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-6 ms-3" icon={faDownload} />
                            <div className="dis">Resume</div>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;