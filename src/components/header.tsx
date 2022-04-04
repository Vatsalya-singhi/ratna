/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import Logo from '../assets/ratna1.svg';

import './header.scss';

function Header() {

    // navigate functions
    const navigate = useNavigate();
    const HomeButton = () => {
        let path = window.location.pathname;
        if (path === '/') {
            return (
                <Link activeClass="active" className="nav-link active header-link" to="home" role="button" >
                    Home
                </Link>
            )
        } else {
            return (
                <a className="nav-link active header-link" role="button" onClick={() => navigate('/')} >
                    Home
                </a>
            )
        }
    }

    const ProductButton = () => {
        let path = window.location.pathname;
        if (path === '/') {
            return (
                <Link activeClass="active" className="nav-link active header-link" to="productList" role="button">
                    Products
                </Link>
            )
        } else {
            return (
                <a className="nav-link active header-link" role="button" onClick={() => navigate(-1)} >
                    Products
                </a>
            )
        }
    }

    return (
        <nav className="navbar sticky-top navbar-dark bg-dark navbar navbar-expand-lg">

            <div className="container-fluid">


                <a className="navbar-brand" role="button">
                    <img src={Logo} height="30" alt="logo" loading="lazy" id='Logo' />
                </a>


                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarRightAlignExample" aria-controls="navbarRightAlignExample" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>

                <div className="collapse navbar-collapse" id="navbarRightAlignExample">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {HomeButton()}
                        </li>
                        <li className="nav-item">
                            {ProductButton()}
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link active header-link" to="contact" role="button">
                                Contact us
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Header;