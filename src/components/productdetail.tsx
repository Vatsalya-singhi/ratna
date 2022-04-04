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
        console.log('product=>', product);
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
            arr.map((obj: any) => {
                if (obj.type === "li") {
                    return (
                        <>
                            <b>{obj?.key}</b>
                            <ol>
                                {obj?.value?.map((val: string, index: number) => <li key={index}>{val}</li>)}
                            </ol>
                        </>
                    )
                }
                if (obj.type === "span") {
                    return (
                        <>
                            <b>{obj?.key}</b>
                            <span>{obj?.value?.join(', ')}</span>
                        </>
                    )
                }
                return (
                    <>
                    </>
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
        <div className='d-flex align-items-center justify-content-center container-fluid my-4'>

            {/* body */}
            <div className='content row d-flex align-items-center container-fluid'>
                {/* LEFT */}
                <div className='col-lg-6 col-md-5 col-sm-12'>

                    {/* preview image */}
                    <div className="pic-list preview-image">
                        <button id='back_button' type="button" className="d-btn btn btn-outline-dark" data-mdb-ripple-color="dark" onClick={() => navigate(-1)}>
                            <i className="fa fa-arrow-left"></i>
                        </button>
                        <img src={coverImg} className="img-fluid w-100 cover-img" loading="lazy" />
                    </div>

                    {/* list of images */}
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='d-flex align-items-center justify-content-between my-3 parent-carosol' >
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

                </div>

                {/* RIGHT */}
                <div className='col-lg-6 col-md-7 col-sm-12 sub-parent-story my-2'>

                    <h5 className='text-center mb-2'>{product.name} ({product.size})</h5>
                    <div className="sub-story">

                        <p>{product.card_text}</p>

                        {contentMaker()}
                    </div>

                    <footer className='d-flex align-items-center justify-content-between my-3'>
                        <span className='text-bold'>
                            ₹{product.price} ONLY
                        </span>
                        <span>
                            Additional Packaging Charges (if applicable)
                        </span>
                    </footer>

                </div>

            </div>

        </div>
    )

}


export default ProductDetails;