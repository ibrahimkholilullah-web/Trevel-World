import React, { useContext, useRef, useState } from "react";
import Navber from "./Navber";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../AuthPrivate/AuthPrivated";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../AuthPrivate/firebase.config";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import bgImg from "../../assets/banner3.png"

function Login() {
  const { signinWithUser, googleSignUp, setUser } = useContext(AuthProvider);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, serError] = useState("");
  const [passwordIcon, setPasswordIcon] = useState(false);
  const emailRef = useRef();

  const LoginUserFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signinWithUser(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in", {
          position: "top-center",
        });
        setUser(result.user);
      })
      .catch((err) => {
        serError(err.code);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(auth, email).then(() => {
        toast.info("Please check your email", {
          position: "top-center",
        });
      });
    }
  };

  const signUpGoogle = () => {
    googleSignUp()
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully logged in with Google", {
          position: "top-center",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        serError(err.code);
      });
  };

  return (
    <div className="container mx-auto">
            <Navber />
            <div
      className="container mx-auto min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center bg-black/25 justify-center flex-grow">
        <div className="w-full max-w-md bg-[#FAD8BC] border-black border bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
            Login User
          </h2>
          <form onSubmit={LoginUserFrom}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-green-800 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                ref={emailRef}
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-green-800 font-medium mb-2">
                Password
              </label>
              <input
                type={passwordIcon ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setPasswordIcon(!passwordIcon)}
                className="absolute top-11 right-5"
              >
                {passwordIcon ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>

          <button
            onClick={signUpGoogle}
            className="btn border-black rounded-lg border w-full my-2"
          >
            Google Sign-Up
          </button>

          {error && <p className="text-red-700 text-sm text-left">{error}</p>}

          {/* Footer Links */}
          <div className="text-center mt-6 text-sm text-green-800">
            <Link to="/register" className="text-green-700 hover:underline">
              Don't have an account? Sign Up
            </Link>
            <p className="mt-2">
              <a
                href="#"
                onClick={handleForgotPassword}
                className="text-green-500 hover:underline"
              >
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
