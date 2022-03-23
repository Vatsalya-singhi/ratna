/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/ratna1.svg';

import './header.css';

function Header() {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark navbar navbar-expand-lg">
            {/* Container wrapper */}
            <div className="container-fluid">

                {/* Navbar brand */}
                <a className="navbar-brand" role="button">
                    <img src={Logo} height="30" alt="logo" loading="lazy" id='Logo' />
                </a>

                {/* Toggle button */}
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarRightAlignExample" aria-controls="navbarRightAlignExample" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>
                {/* Collapsible wrapper */}
                <div className="collapse navbar-collapse" id="navbarRightAlignExample">
                    {/* Left links */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link active" to="home" spy={true} smooth={true} role="button" >
                                Home
                                {/* <a className="nav-link active" aria-current="page">Home</a> */}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link active" to="productList" spy={true} smooth={true} role="button">
                                Products
                                {/* <a className="nav-link active">Products</a> */}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link active" to="contact" spy={true} smooth={true} role="button">
                                Contact us
                                {/* <a className="nav-link active">Contact us</a> */}
                            </Link>
                        </li>
                        {/* Navbar dropdown */}
                    </ul>
                    {/* Left links */}
                </div>
                {/* Collapsible wrapper */}
            </div>
            {/* Container wrapper */}
        </nav>
    );
}

export default Header;