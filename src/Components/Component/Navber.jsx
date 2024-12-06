import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthProvider } from '../AuthPrivate/AuthPrivated';
import bannerImg from "../../assets/banner.png";
import { CiSearch } from 'react-icons/ci';
import { toast } from 'react-toastify';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Navber = () => {
  const { logOutUser, user } = useContext(AuthProvider);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const signOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Successfully Logged Out", {
          position: "top-center"
        });
      })
      .catch(() => {
        toast.error("Logout Failed");
      });
  };

  const menuItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/addvisa">Add Visas</NavLink></li>
      <li className="dropdown dropdown-hover relative">
        <div tabIndex={0} role="button" className="">All Visas</div>
        <ul tabIndex={0} className="dropdown-content absolute right-0 bg-base-100 rounded-box z-10 w-52 p-2 shadow">
          <li><NavLink to="/allvisa">All Visa</NavLink></li>
          <li><NavLink to="/Toutorial">Tourist Visa</NavLink></li>
          <li><NavLink to="/studentVisa">Student Visa</NavLink></li>
          <li><NavLink to="/officialVisa">Official Visa</NavLink></li>
        </ul>
      </li>
      <li><NavLink to="/myaddesVisas">My Added Visas</NavLink></li>
      <li><NavLink to="/myvisaApplication">My Visa Application</NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar border-b-2 h-16 items-center py-10 dark:bg-black dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              aria-label="Menu Toggle" 
              aria-expanded="false" 
              className="btn btn-ghost lg:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul className="menu header-font items-center dark:text-white text-[#034833] menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              {menuItems}
            </ul>
          </div>
          <img className="w-10 rounded-full h-10 border border-green-400" src={bannerImg} alt="Banner" />
          <Link to="/" className="btn btn-ghost text-lg md:text-2xl">Travel World</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1 dark:text-white text-[#034833]">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={darkModeToggle} className="mr-4 text-3xl dark:border-white border rounded-full border-black">
            {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
          {user ? (
            <div className="dropdown dropdown-hover relative">
              <div tabIndex={0} role="button" className="flex items-center">
                <img 
                  alt="User Avatar" 
                  className="w-10 h-10 rounded-full border-2 p-[2px] border-green-500" 
                  src={user?.photoURL || 'defaultAvatar.png'} 
                />
              </div>
              <ul className="dropdown-content absolute right-0 bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                <li><a>{user?.displayName || 'Anonymous'}</a></li>
                <li onClick={signOut}><NavLink to="/">Logout</NavLink></li>
              </ul>
            </div>
          ) : (
            <Link className="btn bg-[#83CD20] text-white dark:text-white rounded-xl text-sm" to="/login">Login</Link>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navber;
