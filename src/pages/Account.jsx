import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <div className="w-full text-white">
      <div className="relative h-[450px] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/34935dbf-8bc4-44d7-a790-3128297a8e45/CA-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="absolute top-[50%] z-10 px-6">
          <h1 className="text-4xl font-bold md:text-5xl">My Movies</h1>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-black/60"></div>
      </div>
      <SavedMovies />
    </div>
  );
};

export default Account;
