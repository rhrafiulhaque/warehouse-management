import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    return (
        <div>
            This is update area
        </div>
    );
};

export default Update;