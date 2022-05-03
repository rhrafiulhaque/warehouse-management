import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './Update.css';

const Update = () => {

    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        fetch(`https://powerful-brushlands-43536.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data);
            });
    }, [id])

    const updateQuantity= event =>{
        event.preventDefault();
        const oldQuantity = singleProduct.quantity;
        const newQuantity = event.target.updQuantity.value;
        const quantity = parseInt(oldQuantity) + parseInt(newQuantity);
        const updatedQuantity ={quantity};

        fetch(`https://powerful-brushlands-43536.herokuapp.com/product/${id}`,{ 
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedQuantity) 
        })
        .then(res=>res.json())
        .then(data=>{
            fetch(`https://powerful-brushlands-43536.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data);
            });
            toast('Quantity Updated');
        });    
    }

    
    const delivered=()=>{
        const delivered = singleProduct?.quantity;
        const afterDeliver = {delivered};
        fetch(`https://powerful-brushlands-43536.herokuapp.com/productdelivery/${id}`,{ 
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(afterDeliver) 
        })
        .then(res=>res.json())
        .then(data=>{
            fetch(`https://powerful-brushlands-43536.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data);
            });
            toast('One Product Delivered');
        });  
        console.log('delivered');
    }

    
   
    return (
        <div className='container'>
            <div className="row ">
                <div className='  col-md-4 col-sm-12 text-center mx-auto'>
                    <div className=" product mt-5">
                        <img src={singleProduct?.img} className="w-100 product-img" alt="" />
                        <div className="product-details p-2">
                            <h2>{singleProduct?.name}</h2>
                            <p>{singleProduct?.description}</p>
                            <h3>${singleProduct?.price}</h3>
                            <p>Supplier: <span className='fw-bolder'>{singleProduct?.supplier}</span></p>
                            <p>Quantity: <span className='fw-bold'>{singleProduct?.quantity}</span></p>
                            <form onSubmit={updateQuantity} className='my-3'>
                            <input type="number" name='updQuantity' className='updQty' placeholder='Update Quantity'/>
                            <button className='btn-primary ms-3' type='submit' >Update</button>
                            </form>
                            <button className='btn-upd' onClick={delivered} >Delivered</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;