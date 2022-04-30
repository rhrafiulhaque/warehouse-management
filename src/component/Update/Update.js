import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {productId} = useParams();
    return (
        <div>
            This is update area
        </div>
    );
};

export default Update;