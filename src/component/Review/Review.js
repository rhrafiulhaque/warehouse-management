import React from 'react';
import { Card } from 'react-bootstrap';
import Readmore from '../Readmore/Readmore';
import './Review.css';

const Review = ({ review }) => {
    const { name, img, message, ratings } = review;
    return (
        <div className='col-md-4 mt-5 text-center'>
            <Card >
                <Card.Img variant="top" src={img} className="review-img mt-3" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <Readmore message ={message}>
                            
                        </Readmore>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Ratings: <span className='fw-bold'>{ratings}</span></small>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Review;