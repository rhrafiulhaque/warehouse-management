import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    });
    return (
        <div className='container'>
            <h1 className='mt-5 text-center products'>Our Products</h1>
            <div className="row">
                {
                    products.slice(0,6).map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Items;