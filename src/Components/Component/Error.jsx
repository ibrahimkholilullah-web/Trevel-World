import React from 'react';
import error from "../../assets/error.png"
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
const Error = () => {
    return (
        <div>
          {/* <Helmet>
            Error ||
          </Helmet> */}
          <div className='min-h-screen'>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                  <div className="max-w-md">
                    <h1 className="text-5xl font-bold my-4">404 Found</h1>
                    <img className='mx-auto my-4' src={error} alt="" />
                    <Link to="/" className="btn bg-green-500 text-white">Go to Home Page</Link>
                  </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Error;