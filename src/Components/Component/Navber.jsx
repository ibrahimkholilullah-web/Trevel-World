import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../AuthPrivate/AuthPrivated';
import bannerImg from "../../assets/banner.png";

const Navber = () => {
  const { logOutUser, user } = useContext(AuthProvider);
  const navigate = useNavigate();

  const userLogOut = () => {
    logOutUser()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const data = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/addvisa">Add Visa</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start my-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" aria-label="Menu Toggle" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu header-font text-[#034833] menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {data}
          </ul>
        </div>
        <img className="w-10 rounded-full h-10 border border-green-400" src={bannerImg} alt="Banner" />
        <Link to="/" className="btn btn-ghost text-xl">Travel World</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1 text-[#034833]">
          {data}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" className='border-2 p-[2px] rounded-full border-green-500' src={user.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>{user.displayName}</a></li>
              <li onClick={userLogOut}><a href="">Logout</a></li>
            </ul>
          </div>
        ) : (
          <Link className="btn bg-[#83CD20] text-white rounded-xl text-sm" to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
