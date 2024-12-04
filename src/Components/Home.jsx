import React from 'react';
import Banner from './Home/Banner';
import LatesVisat from './Home/LatesVisat';
import ExtraSectionOne from './Extra/ExtraSectionOne';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatesVisat></LatesVisat>
            <ExtraSectionOne></ExtraSectionOne>
        </div>
    );
};

export default Home;