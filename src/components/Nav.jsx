import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4 absolute w-full z-10">
      <Link to="/">
        <h1 className="text-red-600 font-bold cursor-pointer w-24 sm:w-36">
          <img className="w-full" src={Logo} alt="Netflix Logo" />
        </h1>
      </Link>

      <div>
        <Link to="/signin">
          <button className="text-white mr-4 hover:text-white/90 cursor-pointer text-sm sm:text-base">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 text-white hover:bg-red-700 cursor-pointer px-5 py-3 rounded text-sm sm:text-base">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
