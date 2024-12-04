import React, { useContext, useRef } from "react";
import Navber from "./Navber";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../AuthPrivate/AuthPrivated";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../AuthPrivate/firebase.config";
import { toast } from "react-toastify";

function Login() {
    const {signinWithUser,googleSignUp,setUser} = useContext(AuthProvider)
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef()
    const LoginUserFrom = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signinWithUser(email,password)
        .then((result) => {
            navigate(location?.state?location.state :"/");
            toast.success('SuccessFully  Your Login',{
              position:"top-center"
            })
            setUser(result.user)
        })
        .catch(err => {
            console.log(err.code)
        })


    }
    const handleForgatePassword = () =>{
      const email = emailRef.current.value
     if(email){
      sendPasswordResetEmail(auth, email)
      .then(() =>{
        toast.info("please Chack Your Email",{
          position:"top-center"
        })

      })
     }
    }
    const signUpGoogle =() =>{
        googleSignUp()
        .then((result)=>{
            setUser(result.user)
            toast.success('SuccessFully  Your Login Google',{
              position:"top-center"
            })
        })
        .catch(err => {
            console.log(err.code)
        })
    }
  return (
   <div className="container mx-auto">
    <Navber></Navber>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br rounded-md from-green-500 to-purple-600">
      <div className="w-full max-w-md bg-[#F1F5EB] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
           Login User
        </h2>
        <form onSubmit={LoginUserFrom}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div>
        <button onClick={signUpGoogle} className="btn border-black rounded-lg border w-full my-2 ">Google Sign-Up</button>
        </div>
        {/* Footer Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <Link to="/register">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </Link>
          <p className="mt-2">
            <a href="#" onClick={handleForgatePassword} className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Login;
