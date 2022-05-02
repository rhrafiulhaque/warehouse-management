import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getMyitem = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myitem?email=${email}`;
            fetch(url,{
                method:'GET',
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setItems(data))
        }
        getMyitem();
    }, [user])

    const deleteProduct = id => {
        const proceed = window.confirm("Are you Sure to delete this Item?");
        if (proceed) {
            fetch(`http://localhost:5000/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
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
        <div className='container'>
            <h1 className='mt-5 text-center products'>My Products: {items.length}</h1>
            <div className="row">
                {
                    items.map(item =>
                        <div className='col-md-4 col-sm-12 text-center'>
                            <div className=" product mt-5">
                                <img src={item.img} className="w-100 product-img" alt="" />
                                <div className="product-details p-2">
                                    <h2>{item.name}</h2>
                                    <p> {item.description}</p>
                                    <h3>${item.MyItemprice}</h3>
                                    <p>Supplier: <span className='fw-bolder'>{item.supplier}</span></p>
                                    <p>Quantity: <span className='fw-bold'>{item.quantity}</span></p>
                                    <button className='btn-upd' onClick={() => productDetail(item._id)}>Update</button>
                                    <button className='btn-upd ms-2' onClick={() => deleteProduct(item._id)} style={{ background: 'red', color: 'white' }} >Delete</button>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyItem;