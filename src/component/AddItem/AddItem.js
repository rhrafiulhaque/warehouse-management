import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddItem.css';

const AddItem = () => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const supplierRef = useRef('');
    const quantityRef = useRef('');
    const urlRef = useRef('');


    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const supplier = supplierRef.current.value;
        const quantity = quantityRef.current.value;
        const img = urlRef.current.value;
        console.log(name,description,price,supplier,quantity,img);

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