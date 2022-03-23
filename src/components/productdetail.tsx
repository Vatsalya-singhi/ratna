/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './productdetail.css';

import Bottle from '../assets/oil/bottle.jpg';

import db from '../assets/db.json';


function ProductDetails() {

    const [product, setProduct] = useState<any>(null);
    const navigate = useNavigate();
    const { productID } = useParams<string>();

    // set product
    useEffect(() => {
        let arr = db['productList'];
        let product = arr.find((product) => product.id === parseInt(productID ?? ""));

        if (!product) {
            navigate('/');
            return;
        }
        setProduct(product);

        console.log('product=>', product);
    }, []);


    if (!product) {
        return (
            <>
            </>
        )
    }


    return (
        <div className='d-flex align-items-center justify-content-center container-fluid my-4'>

            {/* body */}
            <div className='content row d-flex align-items-center container-fluid'>
                {/* LEFT */}
                <div className='col-lg-6 col-md-5 col-sm-12'>

                    {/* preview image */}
                    <div className="pic-list preview-image">
                        <button id='back_button' type="button" className="d-btn btn btn-outline-dark" data-mdb-ripple-color="dark">
                            <i className="fa fa-arrow-left"></i>
                        </button>
                        <img src={Bottle} className="img-fluid w-100" loading="lazy" />
                    </div>

                    {/* list of images */}
                    <div className='d-flex align-items-center justify-content-between my-3 parent-carosol' >
                        <a className="navbar-brand pic-list mx-2" role="button">
                            <img src={Bottle} height="40" alt="logo" loading="lazy" />
                        </a>
                        <a className="navbar-brand pic-list mx-2" role="button">
                            <img src={Bottle} height="40" alt="logo" loading="lazy" />
                        </a>
                        <a className="navbar-brand pic-list mx-2" role="button">
                            <img src={Bottle} height="40" alt="logo" loading="lazy" />
                        </a>
                        <a className="navbar-brand pic-list mx-2" role="button">
                            <img src={Bottle} height="40" alt="logo" loading="lazy" />
                        </a>
                        <a className="navbar-brand pic-list mx-2" role="button">
                            <img src={Bottle} height="40" alt="logo" loading="lazy" />
                        </a>
                        <a className="navbar-brand pic-list mx-2" role="button">
                            <img src={Bottle} height="40" alt="logo" loading="lazy" />
                        </a>
                        <a className="navbar-brand pic-list mx-2" role="button">
                            <img src={Bottle} height="40" alt="logo" loading="lazy" />
                        </a>
                        <a className="navbar-brand pic-list mx-2" role="button">
                            <img src={Bottle} height="40" alt="logo" loading="lazy" />
                        </a>
                    </div>

                </div>

                {/* RIGHT */}
                <div className='col-lg-6 col-md-7 col-sm-12 sub-parent-story'>
                    <h5 className='text-center mb-2'>Brilliantine (200 ml)</h5>
                    <p className="sub-story">
                        <b>Direction for use-</b>
                        <ol>
                            <li>Apply a few drops on scalp and massage with fingertips, to help the oil penetrate into the roots of your hair.</li>
                            <li>Leave for atleast 2-4 hrs or overnight for better results</li>
                        </ol>

                        <b>Advantages-</b>
                        <span>controls hair fall, adds strength and shine, balances scalp, safe for all hair types, helps in detangling the hair, increases shine, perfect for hair moisturization, helps to get silkier, 100% Natural Free of Harmful Chemicals  & Toxins, Anti- Dandruff,</span>
                    </p>

                </div>

            </div>

        </div>
    )

}


export default ProductDetails;