import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faDownload, faEnvelopeOpen, faHouseUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                <ul className="sidebar-icon">
                    <li className="icon-box my-4 text-center">
                        <NavLink to="/home" className="text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-5" icon={faHouseUser} />Home</NavLink>
                    </li>
                    <li className="icon-box my-4 text-center">
                        <NavLink to="/about" className="text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-5" icon={faUser} />About</NavLink>
                    </li>
                    <li className="icon-box my-4 text-center">
                        <NavLink to="/projects" className="text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-5" icon={faBriefcase} />Protfolio</NavLink>
                    </li>
                    <li className="icon-box my-4 text-center">
                        <NavLink to="/contact" className="text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-5" icon={faEnvelopeOpen} />Contact</NavLink>
                    </li>
                    <li className="icon-box my-4 text-center">
                        <NavLink to="/resume" className="text-decoration-none">
                            <FontAwesomeIcon className="text-secondary fs-5" icon={faDownload} />Resume</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;