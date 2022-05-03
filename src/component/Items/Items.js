import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';
import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-brushlands-43536.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    });
    return (
        <div className='container'>
            <h1 className='mt-5 text-center products'>Our Products</h1>
            <div className="row">
                {
                    products.slice(0,6).map(product => <HomeProduct key={product._id} product={product}></HomeProduct>)
                }
            </div>
        </div>
    );
};

export default Items;