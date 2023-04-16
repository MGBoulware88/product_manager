import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AllProducts = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{product.title}</h1>
            <br />
            <p>Price: {product.price}</p>
            <br />
            <p>Description: {product.description}</p>
            <br />
        </div>
    );
}

export default AllProducts;

