import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Update.css';

const Update = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/services.json")
            .then(res => res.json())
            .then(data => {
                const findProduct = data.find(item => item.id === parseInt(id));
                setSingleProduct(findProduct);
            });
    }, [id])
    return (
        <div className='container'>
            <div className="row ">
                <div className='  col-md-4 col-sm-12 text-center mx-auto'>
                    <div className=" product mt-5">
                        <img src={singleProduct?.img} className="w-100 product-img" alt="" />
                        <div className="product-details p-2">
                            <h2>{singleProduct?.name}</h2>
                            <p>{singleProduct.description}</p>
                            <h3>${singleProduct?.price}</h3>
                            <p>Supplier: <span className='fw-bolder'>{singleProduct?.supplier}</span></p>
                            <p>Quantity: <span className='fw-bold'>{singleProduct?.quantity}</span></p>
                            <form action="" className='my-3'>
                            <input type="number" name='updQuantity' className='updQty' placeholder='Update Quantity'/>
                            <button className='btn-primary ms-3' type='submit' >Update</button>
                            </form>
                            <button className='btn-upd' >Delivered</button>
                            <button className='btn-upd ms-2' style={{background:'red', color:'white'}} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;