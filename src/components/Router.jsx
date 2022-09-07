import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";
import Products from '../pages/Proucts';
import NotFound from '../pages/NotFound';
import CreateProduct from '../pages/CreateProduct';
import { ROUTES } from '../utills/routes';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES?.products} element={<Products />} />
                <Route path={ROUTES?.create} element={<CreateProduct />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;