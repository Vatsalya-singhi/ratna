/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './productpreview.scss';

const ProductPreview = (props: any) => {

    // set variables
    let product = props.product;
    var cover_img = props.cover_img;
    
    // navigate functions
    const navigate = useNavigate();
    const onProductClick = () => {
        navigate(`/product/${product.id}`);
    }

    return (
        <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" role="button"
                    onClick={() => onProductClick()}>
                    <img src={cover_img} className="img-fluid" loading="lazy" alt='cover_img' />
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.card_title}</h5>
                    <p className="card-text">
                        {product.card_text}
                    </p>
                    <a className="btn btn-outline-dark btn-floating m-1 grow" role="button"
                        onClick={() => onProductClick()}>
                        <i className="fas fa-arrow-circle-right icon-style"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default ProductPreview;