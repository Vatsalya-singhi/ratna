/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './productdetail.scss';

// import db from '../assets/db.json';
import { db } from '../service/db';


function ProductDetails() {

    const [product, setProduct] = useState<any>(null);
    const [coverImg, setCoverImg] = useState<string>("");
    const [coverImgIndex, setCoverImgIndex] = useState<number>();
    const { productID } = useParams<string>();

    const navigate = useNavigate();

    // set product
    useEffect(() => {
        let arr = db['productList'];
        let product = arr.find((product) => product.id === parseInt(productID ?? ""));

        if (!product || product == null) {
            navigate('/');
            return;
        }
        // set product
        setProduct(product);
        // console.log('product=>', product);
        // set coverimage
        setCoverImg(product.cover_img);
        // set coverimage index
        let index = product.img_array.findIndex(img => img === product?.cover_img);
        setCoverImgIndex(index);
    }, []);


    const updatePreviewImage = (img: string, index: number) => {
        setCoverImg(img);
        setCoverImgIndex(index);
    }

    const contentMaker = () => {
        let arr = product?.content ?? [];
        return (
            arr.map((obj: any, index: number) => {
                if (obj.type === "li") {
                    return (
                        <React.Fragment key={index}>
                            <b>{obj?.key}</b>
                            <ol>
                                {obj?.value?.map((val: string, j: number) => <li style={{ fontSize: "0.9em" }} key={j}>{val}</li>)}
                            </ol>
                        </React.Fragment>
                    )
                }
                if (obj.type === "span") {
                    return (
                        <React.Fragment key={index}>
                            <b>{obj?.key}</b>
                            <span style={{ "fontSize": "0.9em" }}>{obj?.value?.join(', ')}</span>
                        </React.Fragment>
                    )
                }
                return (
                    <React.Fragment>
                    </React.Fragment>
                )
            })
        )
    }



    if (!product) {
        return (
            <>
            </>
        )
    }


    return (
        <div className='container pt-4'>

            {/* body */}
            <div className='content row d-flex align-items-center justify-content-center p-0 m-0'>

                {/* LEFT */}
                <div className='col-lg-6 col-md-5 col-sm-12 p-0'>

                    {/* preview image */}
                    <div className="pic-list preview-image">
                        <button id='back_button' type="button" className="d-btn btn btn-outline-dark bg-white" data-mdb-ripple-color="dark" onClick={() => navigate(-1)}>
                            <i className="fa fa-arrow-left"></i>
                        </button>
                        <img src={coverImg} className="img-fluid w-100 cover-img" style={{ "objectFit": "contain" }} loading="lazy" />
                    </div>

                    {/* list of images */}
                    <div className='d-flex align-items-center my-2 py-2 parent-carosol' >
                        {
                            product && product.img_array && product.img_array.map((img: string, index: number) => {
                                return (
                                    <a role="button" key={index}
                                        onClick={() => updatePreviewImage(img, index)}
                                        onMouseOver={() => updatePreviewImage(img, index)}
                                        className={`navbar-brand pic-list mx-2 ${coverImgIndex === index ? 'active-img' : ''}`}>
                                        <img src={img} key={index} height="40" width="45" alt="logo" loading="lazy" />
                                    </a>
                                )
                            })
                        }
                    </div>

                </div>

                {/* RIGHT */}
                <div className='col-lg-6 col-md-7 col-sm-12 sub-parent-story p-3'>

                    <h2 className='text-center my-2'> {product.name} ({product.size}) </h2>

                    <div className="sub-story">
                        <p className='my-4'>{product.card_text}</p>
                        {contentMaker()}
                    </div>

                    <footer className='row my-3 d-flex align-items-center justtify-content-center'>
                        <span className='text-bold col-4 expand-onHover' style={{ fontSize: "0.9em" }}>
                            ₹{product.price} ONLY
                        </span>
                        <span className='col-8 text-center' style={{ fontSize: "0.9em" }} >
                            Additional Packaging Charges (if applicable)
                        </span>
                    </footer>

                </div>

            </div>

        </div>
    )

}


export default ProductDetails;