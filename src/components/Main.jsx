import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import MovieContext from "../context/MovieContext";

import { FaStar, FaPlay } from "react-icons/fa";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});
  const { handleMovieData } = useContext(MovieContext);

  const truncateStr = (str, chars) => {
    if (str?.length > chars) {
      return str.slice(0, chars) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        params: {
          api_key: "02a015f767f49fbd46124014022d6a5c",
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFeaturedMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);

  return (
    <div className="featuredImg relative h-[550px] w-full text-white xl:h-[700px]">
      <div className="absolute z-10 h-[550px] w-full bg-gradient-to-r from-black xl:h-[700px]"></div>
      {featuredMovie?.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${featuredMovie?.backdrop_path}`}
          alt={featuredMovie?.title}
          className="animate-fade h-full w-full object-cover object-top"
        />
      )}
      <div className="animate-fade absolute top-1/2 z-20 max-w-[90%] -translate-y-1/2 p-6 md:max-w-[65%] xl:max-w-[40%]">
        <div>
          <h1 className="my-6 text-3xl sm:text-5xl">{featuredMovie?.title}</h1>
          <p className="text-sm sm:text-base xl:text-lg">
            {truncateStr(featuredMovie?.overview, 200)}
          </p>
          <p className="my-4 flex items-center sm:text-lg xl:text-xl">
            <FaStar className="mr-2 text-yellow-300" />
            {featuredMovie?.vote_average?.toFixed(1)}
          </p>
          <div>
            <button
              onClick={() => handleMovieData(featuredMovie.id)}
              className="mr-4 flex cursor-pointer items-center rounded border border-red-600 bg-red-600 px-6 py-3 text-sm text-white hover:border-red-700 hover:bg-red-700 sm:text-base xl:text-lg"
            >
              <FaPlay className="mr-2" />
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
