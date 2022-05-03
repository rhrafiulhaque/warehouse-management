import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import './Inventory.css';

const Inventroy = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-brushlands-43536.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data)); 
    })
    return (
        <div className='container'>
            <h1 className='mt-5 text-center products'>Our Products</h1>
            <Nav.Link as={Link} className="add-btn" to="/additem">Add Item</Nav.Link>
            <div className="row">
                {
                    products.map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Inventroy;