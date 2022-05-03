import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddItem from '../AddItem/AddItem';
import Readmore from '../Readmore/Readmore';
import './Products.css';

const Products = ({ product }) => {
    const { _id, name, quantity, img, price, supplier, description } = product;


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-brushlands-43536.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    })

    const deleteProduct = id => {
        const proceed = window.confirm("Are you Sure to delete this Item?");
        if (proceed) {
            fetch(`https://powerful-brushlands-43536.herokuapp.com/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                    toast('Deleted Successfully');
                })

        }
    }

    const navigate = useNavigate();
    const productDetail = id => {
        navigate(`/inventory/${id}`);
    }





    return (
        <div className='  col-md-4 col-sm-12 text-center'>
            <div className=" product mt-5">
                <img src={img} className="w-100 product-img" alt="" />
                <div className="product-details p-2">
                    <h2>{name}</h2>
                    <p><Readmore message={description}></Readmore></p>
                    <h3>${price}</h3>
                    <p>Supplier: <span className='fw-bolder'>{supplier}</span></p>
                    <p>Quantity: <span className='fw-bold'>{quantity}</span></p>
                    <button className='btn-upd' onClick={() => productDetail(_id)}>Update</button>
                    <button className='btn-upd ms-2' onClick={() => deleteProduct(_id)} style={{ background: 'red', color: 'white' }} >Delete</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Products;