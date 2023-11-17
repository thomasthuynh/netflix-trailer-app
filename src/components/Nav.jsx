import React from "react";
import Logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4 absolute w-full z-100">
      <h1 className="text-red-600 uppercase text-4xl font-bold cursor-pointer w-40">
        <img src={Logo} alt="Netflix Logo" className="w-full" />
      </h1>
      <div>
        <button className="text-white mr-4 hover:text-white/90">Sign In</button>
        <button className="bg-red-600 text-white hover:bg-red-700 px-6 py-4 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
