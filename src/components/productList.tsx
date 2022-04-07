import React, { useEffect, useState } from 'react';


import ProductPreview from './productpreview';
import './productList.scss';

import { db } from '../service/db';
// import db from '../assets/db.json';

function ProductList() {

    const [data, setData] = useState<any[]>([]);

    // set data
    useEffect(() => {
        setData(db["productList"] ?? []);
    }, []);

    // render Products
    const renderProductList = () => {
        return (data && data.map((product, index) => <ProductPreview product={product} cover_img={product.cover_img} key={index} />));
    }

    return (
        <section className="text-center mt-5 bg-white container">
            <h4 className="mb-3" id='productList'>
                <strong>Our Products</strong>
            </h4>

            <div className="row d-flex align-items-center justify-content-center">
                {renderProductList()}
            </div>
        </section>
    )
}

export default ProductList;