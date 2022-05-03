import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const supplierRef = useRef('');
    const quantityRef = useRef('');
    const urlRef = useRef('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const supplier = supplierRef.current.value;
        const quantity = quantityRef.current.value;
        const img = urlRef.current.value;
        const email = user.email;
        const data={
            name:name,
            description:description,
            price:price,
            supplier:supplier,
            quantity:quantity,
            img:img,
            email:email
        }

        const url = `https://powerful-brushlands-43536.herokuapp.com/addproduct`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json(0))
        .then(data=>{
            toast('Product Added Successfully');
            navigate('/inventory');
        })


    }
    return (
        <div className='container'>
            <h1 className='text-center my-3'>Add Item</h1>
            <div className='row mx-auto item-add'>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" >
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Product Name" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control ref={descriptionRef} type="text" placeholder="Enter Description" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control ref={priceRef} type="number" placeholder="Enter Price" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control ref={supplierRef} type="text" placeholder="Enter Supllier Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control ref={quantityRef} type="number" placeholder="Enter Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control ref={urlRef} type="text" placeholder="Enter Picture URL" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Add Item
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default AddItem;