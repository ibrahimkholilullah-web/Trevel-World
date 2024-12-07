import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../AuthPrivate/AuthPrivated';
import bannerImg from '../../assets/banner.png';
import { toast } from 'react-toastify';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { CiLogin } from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Navber = ({ darkMode, darkModeToggle }) => {
  const navigate = useNavigate();
  const { logOutUser, user } = useContext(AuthProvider);

  const signOut = () => {
    logOutUser()
      .then(() => {
        toast.success('Successfully Logged Out', {
          position: 'top-center',
        });
        navigate('/');
      })
      .catch(() => {
        toast.error('Logout Failed');
      });
  };

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 ${
              isActive
                ? 'border-b-4 border-green-500 dark:text-[#43A047] text-green-500'
                : 'hover:text-green-500'
            }`
          }
        >
         <IoHomeOutline /> Home 
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addvisa"
          className={({ isActive }) =>
            `px-4 py-2 ${
              isActive
                ? 'border-b-4 border-green-500 dark:text-[#43A047] text-green-500'
                : 'hover:text-green-500'
            }`
          }
        >
          Add Visas
        </NavLink>
      </li>
      <li className="dropdown dropdown-hover relative">
        <div tabIndex={0} role="button" className="px-4 py-2 hover:text-green-500">
          All Visas <FaAngleDoubleDown />
        </div>
        <ul className="dropdown-content border-2 mt-20 md:mt-0 dark:border-[#43A047] dark:bg-black absolute right-0 bg-base-100 rounded-box z-10 w-36 md:w-44 p-2 shadow">
          <li>
            <NavLink
              to="/allvisa"
              className={({ isActive }) =>
                `px-4 py-2 block ${
                  isActive
                    ? 'border-b-4 dark:text-[#43A047] border-green-500 text-green-500'
                    : 'hover:text-green-500'
                }`
              }
            >
              All Visa 
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Toutorial"
              className={({ isActive }) =>
                `px-4 py-2 block ${
                  isActive
                    ? 'border-b-4 dark:text-[#43A047] border-green-500 text-green-500'
                    : 'hover:text-green-500'
                }`
              }
            >
              Tourist Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/studentVisa"
              className={({ isActive }) =>
                `px-4 py-2 block ${
                  isActive
                    ? 'border-b-4 dark:text-[#43A047] border-green-500 text-green-500'
                    : 'hover:text-green-500'
                }`
              }
            >
              Student Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/officialVisa"
              className={({ isActive }) =>
                `px-4 py-2 block ${
                  isActive
                    ? 'border-b-4 dark:text-[#43A047] border-green-500 text-green-500'
                    : 'hover:text-green-500'
                }`
              }
            >
              Official Visa
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/myaddesVisas"
          className={({ isActive }) =>
            `px-4 py-2 ${
              isActive
                ? 'border-b-4 border-green-500 dark:text-[#43A047] text-green-500'
                : 'hover:text-green-500'
            }`
          }
        >
          My Added Visas
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myvisaApplication"
          className={({ isActive }) =>
            `px-4 py-2 ${
              isActive
                ? 'border-b-4 border-green-500 dark:text-[#43A047] text-green-500'
                : 'hover:text-green-500'
            }`
          }
        >
          My Visa Application
        </NavLink>
      </li>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu header-font items-center dark:text-white text-[#034833] menu-sm dropdown-content bg-base-100 dark:border-[#43A047] border dark:bg-black border-black rounded-box z-10 mt-3 w-52 p-2 shadow">
              {menuItems}
            </ul>
          </div>
          <img className="w-10 hidden md:block rounded-full h-10 border border-green-400" src={bannerImg} alt="Banner" />
          <Link to="/" className="btn btn-ghost text-lg md:text-2xl">
            Travel World
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1 dark:bg-black dark:text-white text-[#034833]">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={darkModeToggle}
            className="mr-4 text-3xl dark:border-white border rounded-full border-black"
          >
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
              <ul className="dropdown-content text-sm dark:bg-black absolute right-0 bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                <li>
                  <a>{user?.displayName || 'Anonymous'}</a>
                </li>
                <li>
                  <NavLink onClick={signOut} to="/">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
           <div>
             <Link className=" inline-flex items-center p-2 text-black border-[#43A047] border px-2 m-2 dark:text-white  rounded-xl text-sm" to="/login">
              Login <CiLogin size={10} />
            </Link>
             <Link className=" inline-flex items-center p-2 text-black border-[#43A047] border px-2 dark:text-white  rounded-xl text-sm" to="/register">
              Sing-Up <CiLogin size={10} />
            </Link>
           
           </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
