import React from 'react';
import { useNavigate } from 'react-router-dom';
import Readmore from '../Readmore/Readmore';
import './Products.css';

const Products = ({ product }) => {
    const { id, name, quantity, img, price, supplier, description } = product;
    const navigate = useNavigate();
    const productDetail= id =>{
        console.log(id);
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
                    <button className='btn-upd' onClick={()=>productDetail(id)}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Products;