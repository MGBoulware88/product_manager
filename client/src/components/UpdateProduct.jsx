import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    //grab the id from URL
    const { id } = useParams();
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    
    //when this component is rendered, fetch the prod details
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => {
                console.error(err)
            });
    }, [id]);
    
    //handler when the form is submitted to update the product
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.put(`http://localhost:8000/api/product/${id}`, {
            //key and val same name shorthand
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate(`/home`)
            })
            .catch(err=>console.log(err))
    }
    //onChange to update state from form inputs
    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <button>Edit</button>
            </form>
        </div>
    )
}

export default UpdateProduct;

