import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="container mt-5">
            <h1 className='mb-5 text-center products'>Our Services</h1>
            <div className='row'>
                <div className="col-md-4 service p-4">
                    <div className="d-flex">
                        <FontAwesomeIcon className='p-3 fs-4' icon={faRocket} />
                        <div>
                            <h4>Express Shipping</h4>
                            <p>We are Delivery anywhere in 3-5 days.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 service p-4">
                    <div className="d-flex">
                        <FontAwesomeIcon className='p-3 fs-4' icon={faTruck} />
                        <div>
                            <h4>Free Shipping</h4>
                            <p>Free Shipping on all us order above $99.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 service p-4">
                    <div className="d-flex">
                        <FontAwesomeIcon className='p-3 fs-4' icon={faMoneyBillWave} />
                        <div>
                            <h4>Money Back Guaranteed</h4>
                            <p>We have 30 days money back guarantee.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;