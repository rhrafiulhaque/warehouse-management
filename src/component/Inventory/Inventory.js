import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Inventroy = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data)); 
    })
    return (
        <div className='container'>
            <h1 className='mt-5 text-center products'>Our Products</h1>
            <div className="row">
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Inventroy;