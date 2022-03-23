/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './product.css';

import Bottle from '../assets/oil/bottle.jpg';
import AloeVera from '../assets/aloe_vera/aloevera.jpg';
import Burfi from '../assets/dry_fruits_burfi/burfi.jpg';
import ProductDetails from './productdetails';
import ProductDetails2 from './productdetails2';

const ProductList = {
    'Brilliantine': 0,
    'Aloe Vera Gel': 1,
    'Dry Fruits Burfi': 2,
}

function Product() {

    const [currProduct, setCurrProduct] = useState<number>(-1);

    const updateCurrProduct = (id: number) => {
        setCurrProduct(id);
    }

    useEffect(() => {
        setCurrProduct(-1);
    }, [])

    const allProductRender = () => {
        console.log(currProduct);
        if (currProduct === -1) {
            return (
                <>
                    {/* 0 */}
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" role="button"
                                onClick={() => updateCurrProduct(ProductList['Brilliantine'])}>
                                <img src={Bottle} className="img-fluid" loading="lazy" />
                                <a>
                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Brilliantine</h5>
                                <p className="card-text">
                                    {/* Hair Tonic helps balance and strengthen all scalp and hair conditions. */}
                                    The formulation of neem, nettle, birch bark, arnica and burdock root infused with handpressed oil addresses a variety of hair and scalp needs.
                                </p>
                                <a className="btn btn-outline-dark btn-floating m-1 grow" role="button"
                                    onClick={() => updateCurrProduct(ProductList['Brilliantine'])}>
                                    <i className="fas fa-arrow-circle-right icon-style"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 1 */}
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" role="button"
                                onClick={() => updateCurrProduct(ProductList['Aloe Vera Gel'])}>
                                <img src={AloeVera} className="img-fluid" loading="lazy" />
                                <a>
                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Aloe Vera Gel</h5>
                                <p className="card-text">
                                    The Aloe Vera Gel extract is an excellent natural day cream for face and body and help soothe your skin problems.
                                    100% organic and safe for natural healthy skin.
                                </p>
                                <a className="btn btn-outline-dark btn-floating m-1 grow" role="button"
                                    onClick={() => updateCurrProduct(ProductList['Aloe Vera Gel'])}>
                                    <i className="fas fa-arrow-circle-right icon-style"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" role="button"
                                onClick={() => updateCurrProduct(ProductList['Dry Fruits Burfi'])}>
                                <img src={Burfi} className="img-fluid" loading="lazy" />
                                <a>
                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Dry Fruits Burfi</h5>
                                <p className="card-text">
                                    This sweet has no artificial sweetner and rich source of protein, vitamins, minerals, and dietary fiber, making them a tasty and healthy snack.
                                </p>
                                <a className="btn btn-outline-dark btn-floating m-1 grow" role="button"
                                    onClick={() => updateCurrProduct(ProductList['Dry Fruits Burfi'])}>
                                    <i className="fas fa-arrow-circle-right icon-style"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            // return <ProductDetails />
            return <ProductDetails2 />
        }


    }

    return (
        <section className="text-center mt-5 bg-white container">
            <h4 className="mb-3" id='productList'>
                <strong>Our Products</strong>
            </h4>

            <div className="row d-flex align-items-center justify-content-center">
                {allProductRender()}
            </div>
        </section>

    )
}

export default Product;