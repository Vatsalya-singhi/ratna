/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import HeroPage from './components/heropage';
import ProductList from './components/productList';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from './components/productdetail';
import ScrollToTop from './service/ScrollToTop';

function App() {
    return (
        <div className="App">

            {/* <Header />
            <main className='bg-white'>
                <HeroPage />
                <Product />
            </main>
            <Footer /> */}


            <main className='bg-white'>
                <Router>
                    <ScrollToTop />
                    <Routes>
                        {/* HOME PAGE */}
                        <Route
                            path='/'
                            element={
                                <>
                                    <Header />
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
                                    <Header />
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
                </Router>

            </main>
            <Footer />

        </div >
    );
}

export default App;
