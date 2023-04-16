import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Products:</h1>
            {products.map((product) => {
                return (
                    <div key={product._id} style={{ textAlign: 'center' }}>
                        <Link to={`/${product._id}`}>
                            <p>{product.title}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default AllProducts;

