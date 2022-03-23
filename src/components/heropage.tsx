/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-scroll';

import './heropage.css';

function HeroPage() {
    return (

        <header>

            <div id="intro-example" className="text-center replace-bg-image hero-img h-100">

                <div className="container parent-div h-100">

                    <div id='home' className="h-100 w-100 text-dark">

                        {/* HEADER */}
                        <div className='h-25 w-100 d-flex align-items-center justify-content-center mb-4'>
                            <p role="button">
                                <h1 className="m-0 mt-5 font-weight-bold text-uppercase heading">
                                    र<span style={{ fontSize: "35px" }} >atna</span>
                                </h1>
                                <sub className="m-0 text-dark" role="button">
                                    Premium collection of unique homemade products with ❤️
                                </sub>
                            </p>
                        </div>
                        {/* BODY */}
                        <div className='h-50 parent-story'>
                            <p className="story">
                                We sell rich, organic, natural and synthetic chemical-free products ranging from everyday beauty products
                                like hair oil and under eye creams to nutritious food products like assorted dry fruits.
                                <br /> <br />
                                Estd. 2015 our company is focused and driven with the aim of providing 100% customer satisfaction.
                            </p>
                        </div>
                        {/* FOOTER */}
                        <div className="h-25 footer">
                            <Link activeClass="active" to="productList" spy={true} smooth={true}>
                                <a className="btn btn-outline-dark btn-lg m-2 text-dark" role="button" rel="nofollow noreferrer">Learn More</a>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true}>
                                <a className="btn btn-outline-dark btn-lg m-2 text-dark" role="button" rel="noreferrer">Contact us</a>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        </header>

    )
}

export default HeroPage;