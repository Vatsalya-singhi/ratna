/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './productdetails.css';

function ProductDetails() {

    return (
        <>

            <div className="col-lg-4 col-md-12 mb-4 row w-100 h-65vh">

                <div className="col-md-5 m-0 p-0">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" role="button">
                        {/* Carousel wrapper */}
                        <div id="carouselBasicExample" className="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
                            {/* Indicators */}
                            <div className="carousel-indicators">
                                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={2} aria-label="Slide 3" />
                            </div>
                            {/* Inner */}
                            <div className="carousel-inner">
                                {/* Single item */}
                                <div className="carousel-item active">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100 img-fluid" loading="lazy" alt="Sunset Over the City" />
                                </div>
                                {/* Single item */}
                                <div className="carousel-item">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100 img-fluid" loading="lazy" alt="Canyon at Nigh" />
                                </div>
                                {/* Single item */}
                                <div className="carousel-item">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100 img-fluid" loading="lazy" alt="Cliff Above a Stormy Sea" />
                                </div>
                            </div>
                            {/* Inner */}
                            {/* Controls */}
                            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        {/* Carousel wrapper */}
                    </div>
                </div>

                <div className='col-md-7 m-0 p-0'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Brilliantine</h5>
                            <p className="card-text">
                                {/* Hair Tonic helps balance and strengthen all scalp and hair conditions. */}
                                The formulation of neem, nettle, birch bark, arnica and burdock root infused with handpressed oil addresses a variety of hair and scalp needs.
                            </p>
                            <a className="btn btn-outline-dark btn-floating m-1 grow" role="button">
                                <i className="fas fa-arrow-circle-right icon-style"></i>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}


export default ProductDetails;