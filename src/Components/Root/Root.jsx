import React, { useState } from 'react';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    const [darkMode, setDarkMode] = useState(false);

    const darkModeToggle = () => {
      setDarkMode(!darkMode);
    };
    return (
       <div className={darkMode ? "dark" : 'bg-[#F1F5EB]'}>
         <div className='w-11/12 mx-auto'>
            <Navber darkModeToggle={darkModeToggle} darkMode={darkMode}></Navber>
            <div className="min-h-[calc(100vh-232px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default Root;