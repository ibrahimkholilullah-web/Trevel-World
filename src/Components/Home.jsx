import React from 'react';
import Banner from './Home/Banner';
import LatesVisat from './Home/LatesVisat';
import ExtraSectionOne from './Extra/ExtraSectionOne';
import ExtraSectionTwo from './Extra/ExtraSectionTwo';
import Lottie from './Extra/Lottie';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Lottie></Lottie>
            <ExtraSectionTwo></ExtraSectionTwo>
            <LatesVisat></LatesVisat>
            <ExtraSectionOne></ExtraSectionOne>

        </div>
    );
};

export default Home;