import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            //key and val same name shorthand
            title,
            price,
            description
        })
            .then(res=> {
                console.log(res.data)
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
                <button>Create</button>
            </form>
        </div>
    )
}

export default ProductForm;

