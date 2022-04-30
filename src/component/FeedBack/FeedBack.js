import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './FeedBack.css';

const FeedBack = () => {
    const [reviews,setReview] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false);
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReview(data));
    })
    const showMore =()=>{
        setLoadProduct(!loadProduct);
    }
    
    return (
        <div className='container text-center'>
            <h1 className='text-center mt-5 fw-bold'>What Our Customer Says!!</h1>
            <div className="row">
                {
                    loadProduct? reviews.map(review=><Review key={review.id} review={review}></Review>) :
                    reviews.slice(0,3).map(review=><Review key={review.id} review={review}></Review>)
                }
                
            </div>
            <button className='btn-show-more  mt-3' onClick={showMore}>{loadProduct?'Show Less':'Show More'}</button>
        </div>
    );
};

export default FeedBack;