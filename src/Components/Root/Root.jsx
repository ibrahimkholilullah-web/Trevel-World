import React from 'react';
import Navber from '../Component/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navber></Navber>
            <div className="min-h-[calc(100vh-232px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;