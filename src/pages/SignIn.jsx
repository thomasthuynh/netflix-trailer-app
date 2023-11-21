import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/34935dbf-8bc4-44d7-a790-3128297a8e45/CA-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="absolute w-full h-screen top-0 left-0 bg-black/60"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black/75 text-white rounded px-8 min-[400px]:px-12 sm:px-16 py-16 sm:py-24 w-[90%] max-w-[350px] sm:max-w-[450px] h-[450px] sm:h-[600px]">
          <h1 className="font-bold text-3xl sm:text-4xl text-center mb-4">
            Sign In
          </h1>
          <form className="flex flex-col w-full sm:w-[80%] mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="my-4 p-2 rounded bg-gray-500 outline-0"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 rounded bg-gray-500 outline-0"
            />
            <button className="bg-red-600 text-white hover:bg-red-700 cursor-pointer px-5 py-3 my-3 rounded text-sm sm:text-base">
              Sign In
            </button>
            <p className="text-neutral-500 text-sm sm:text-base py-4">
              Don't have an account yet?{" "}
              <Link to="/signin">
                <span className="text-white hover:opacity-75">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
