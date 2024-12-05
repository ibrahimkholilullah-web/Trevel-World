import React from 'react';
import Banner from './Home/Banner';
import LatesVisat from './Home/LatesVisat';
import ExtraSectionOne from './Extra/ExtraSectionOne';
import ExtraSectionTwo from './Extra/ExtraSectionTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraSectionTwo></ExtraSectionTwo>
            <LatesVisat></LatesVisat>
            <ExtraSectionOne></ExtraSectionOne>

        </div>
    );
};

export default Home;