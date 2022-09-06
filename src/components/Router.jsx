import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";
import App from '../pages/Proucts';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<App />} />
                <Route path="/create-products" element={<App />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;