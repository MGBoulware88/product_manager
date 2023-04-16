/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductForm from '../components/Product';
import AllProducts from '../components/AllProducts';
import ProductDetails from '../components/ProductDetails';
import UpdateProduct from '../components/UpdateProduct';
export default () => {
    return (
        <div>
            <Routes>
                <Route path="/:id/edit" element={<UpdateProduct />} />
                <Route path="/:id/view" element={<ProductDetails />} />
                <Route path="*" element={
                    <div>
                        <ProductForm />
                        <hr />
                        <AllProducts />
                    </div>
                    
                } />
            </Routes>
        </div>
    )
}