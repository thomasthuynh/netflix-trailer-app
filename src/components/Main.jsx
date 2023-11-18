import React, { useState, useEffect } from "react";
import options from "../Options";

import { FaStar } from "react-icons/fa";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const featuredMovie = movies[Math.floor(Math.random() * movies.length)];

  const truncateStr = (str, chars) => {
    if (str?.length > chars) {
      return str.slice(0, chars) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(featuredMovie);

  return (
    <div className="w-full relative text-white h-[550px]">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      {featuredMovie && (
        <img
          src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute top-[50%] translate-y-[-50%] p-4 max-w-[90%] md:max-w-[65%] xl:max-w-[40%]">
        <div>
          <h1 className="text-4xl sm:text-5xl my-4">
            {featuredMovie?.title}
          </h1>
          <p>{truncateStr(featuredMovie?.overview, 200)}</p>
          <p className="text-xl my-4 flex items-center">
            <FaStar className="text-yellow-500 mr-2" />
            {featuredMovie?.vote_average.toFixed(1)}
          </p>
        </div>
        <div>
          <button className="bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 px-5 py-3 rounded cursor-pointer mr-4 text-sm sm:text-base">
            Play
          </button>
          <button className="bg-black border hover:bg-white hover:text-black hover:bg-red-700 px-5 py-3 rounded cursor-pointer text-sm sm:text-base">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
