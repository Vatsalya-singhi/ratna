/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import HeroPage from './components/heropage';
import ProductList from './components/productList';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from './components/productdetail';
import ScrollToTop from './service/ScrollToTop';

// import Notification from './components/notification';

function App() {
    return (
        <div className="App">
            {/* <Notification severity='success' message='Hello Notification'></Notification> */}

            <ScrollToTop />

            <Header />
            <main className='bg-white'>

                <Routes>

                    {/* HOME PAGE */}
                    <Route
                        path='/'
                        element={
                            <>
                                <HeroPage />
                                <ProductList />
                            </>
                        }>
                    </Route>

                    {/* PRODUCT DETAILS PAGE */}
                    <Route
                        path='product/:productID'
                        element={
                            <>
                                <ProductDetails />
                            </>
                        }>
                    </Route>

                    {/* REDIRECT */}
                    <Route
                        path='*'
                        element={<Navigate replace to="/" />}>
                    </Route>

                </Routes>

            </main>
            <Footer />

        </div >
    );
}

export default App;
