/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import HeroPage from './components/heropage';
import Product from './components/product';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header />

      <main className='bg-white'>
        <HeroPage />
        <Product />
      </main>
      
      <Footer />

    </div >
  );
}

export default App;
