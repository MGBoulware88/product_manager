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
    //filter the page after delete
    const filterProducts = productId => {
        setProducts(products.filter(product => productId !== product._id));
    }

    //delete ONE product BY ID
    const handleDeleteOneProduct = productId => {
        console.log(productId);
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                console.log(res.data)
                filterProducts(productId)
            })
            .catch(err => {
                console.error(err)
            });
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center'}}>All Products:</h1>
            {products.map((product) => {
                return (
                    <ul key={product._id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', listStyle: 'none', margin: '0', padding: '0'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem'}}>
                            <Link to={`/${product._id}/view`}>
                                <li>{product.title}</li>
                            </Link>
                                <button onClick={e => handleDeleteOneProduct(product._id)}>Delete {product.title}</button>
                        </div>
                    </ul>
                );
            })}
        </div>
    );
}
export default AllProducts;

