import React, { useState, useEffect } from "react";

import { FaStar } from "react-icons/fa";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const featuredMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmEwMTVmNzY3ZjQ5ZmJkNDYxMjQwMTQwMjJkNmE1YyIsInN1YiI6IjYzODdkNjMyZmI4MzQ2MDA3YzQ5NTY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CSEx3ymXILbU_02-b4XbTbTAv9J_9zFDh2fB5qVPlCU",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(featuredMovie);

  return (
    <div className="w-full h-2/3 relative text-white">
      <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
      {featuredMovie && (
        <img
          src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute top-[50%] translate-y-[-50%] p-4 max-w-[90%] md:max-w-[65%] xl:max-w-[40%]">
        <div>
          <h1 className="text-4xl sm:text-5xl my-4">{featuredMovie && featuredMovie.title}</h1>
          <p>{featuredMovie && featuredMovie.overview}</p>
          <p className="text-xl my-4 flex items-center"><FaStar className="text-yellow-500 mr-2"/>{featuredMovie && featuredMovie.vote_average.toFixed(1)}</p>
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
