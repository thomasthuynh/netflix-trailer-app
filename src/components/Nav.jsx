import React from "react";
import Logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4 absolute w-full z-10">
      <h1 className="text-red-600 font-bold cursor-pointer w-24 sm:w-36">
        <img className="w-full" src={Logo} alt="Netflix Logo" />
      </h1>
      <div>
        <button className="text-white mr-4 hover:text-white/90 cursor-pointer text-sm sm:text-base">Sign In</button>
        <button className="bg-red-600 text-white hover:bg-red-700 cursor-pointer px-5 py-3 rounded text-sm sm:text-base">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
