import React from 'react';
import Banner from '../Banner/Banner';
import FeedBack from '../FeedBack/FeedBack';
import Items from '../Items/Items';
import Services from '../Servcies/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Services></Services>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;