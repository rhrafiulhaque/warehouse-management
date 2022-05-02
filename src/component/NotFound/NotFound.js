import React from 'react';
import './NotFound.css';
import notfound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <div className="container">
            <img src={notfound} alt="404" className='w-100' />            
            </div>
            
        </div>
    );
};

export default NotFound;