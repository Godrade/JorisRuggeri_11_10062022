import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Housing } from './pages/housing/Housing';

import { Header } from './pages/layout/Header';
import { Footer } from './pages/layout/Footer';

import { Error404 } from './pages/error404/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
