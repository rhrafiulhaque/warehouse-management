import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const FeedBack = () => {
    const [reviews,setReview] = useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReview(data));
    })
    return (
        <div className='container'>
            <h1 className='text-center mt-5 fw-bold'>What Our Customer Says!!</h1>
            <div className="row">
                {
                    reviews.slice(0,3).map(review=><Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default FeedBack;