import React, { useContext, useState } from "react";
import Navber from "./Navber";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../AuthPrivate/AuthPrivated";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [error, setError] = useState('')
   const {handleSignUpEmailandpassword,setUser,updateUser,googleSignUp} = useContext(AuthProvider)
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
   const [passwordIcon, setPasswordIcon] = useState(false)
   const navogate = useNavigate()
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        if(!passwordRegex.test(password)){
            setError('1 uppercase, 1 lowercase, and at least 6 characters long.')
            return
        }
        console.log(name,email,photo,password)
        const newUser = {name,email,photo,password}
        handleSignUpEmailandpassword(email,password)
        .then((result) =>{
            console.log(result.user)
            updateUser({displayName : name, photoURL : photo})
            setUser(result.user)
            navogate("/")
            toast.success('Successfull Your Registration.',{
                position:'top-center'
            })
        })
        .catch(err => {
            setError(err.code)
        })

    }
    const signUpGoogle = () => {
      googleSignUp()
        .then((result) => {
          setUser(result.user);
          toast.success("Successfully logged in with Google", {
            position: "top-center",
          });
          navogate(location?.state ? location.state : "/");
        })
        .catch((err) => {
          setError(err.code);
        });
    };
  return (
  <div className="container mx-auto">
    <Navber></Navber>
    <div className="min-h-screen flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="flex flex-col lg:flex-row bg-[#F1F5EB] shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Section */}
        <div className="p-8 lg:w-1/2 bg-gradient-to-b from-purple-700 to-blue-500 text-white flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">
            Online Event Registration Form
          </h2>
          <p className="text-sm md:text-base mb-6 text-center lg:text-left">
          Log in to your VISA Navigator account to access personalized visa application features. 
          </p>
          <div className="text-center lg:text-left">
            <Link to="/login" className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition">
              Sign In
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-6 md:p-8 lg:w-1/2 ">
          <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 text-center lg:text-left">
            Sign up now
          </h3>
          {/* Form */}
          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Photo URL Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="photo-url">
                Photo URL
              </label>
              <input
                type="url"
                id="photo-url"
                required
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative" >
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type={passwordIcon ? "text" :"password"}
                required
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="button" onClick={() => setPasswordIcon(!passwordIcon)} className=" absolute top-9 right-5 ">
                {
                  passwordIcon ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                }
              </button>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Register
            </button>
            <button
            onClick={signUpGoogle}
            type="button"
            className="btn border-black rounded-lg border w-full my-2"
          >
          <FcGoogle size={25} />          Google Sign-Up
          </button>
            <p >
              {
                error && <p className="text-red-700 text-sm text-left py-2">{error}</p>
              }
            </p>
          </form>

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-500 mt-4 text-center lg:text-left">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;
