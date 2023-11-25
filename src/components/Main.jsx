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
    <div className="featuredImg w-full relative text-white h-[550px] xl:h-[700px]">
      <div className="absolute w-full h-[550px] xl:h-[700px] bg-gradient-to-r from-black z-10"></div>
      {featuredMovie?.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${featuredMovie?.backdrop_path}`}
          alt={featuredMovie?.title}
          className="w-full h-full object-cover object-top fadeIn"
        />
      )}
      <div className="absolute top-[50%] translate-y-[-50%] p-6 max-w-[90%] md:max-w-[65%] xl:max-w-[40%] z-20">
        <div className="fade">
          <h1 className="text-3xl sm:text-5xl my-4">{featuredMovie?.title}</h1>
          <p className="text-sm sm:text-base">
            {truncateStr(featuredMovie?.overview, 200)}
          </p>
          <p className="sm:text-lg my-4 flex items-center">
            <FaStar className="text-yellow-300 mr-2" />
            {featuredMovie?.vote_average?.toFixed(1)}
          </p>
          <div>
            <button
              onClick={() => handleMovieData(featuredMovie.id)}
              className="bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 flex items-center px-6 py-3 rounded cursor-pointer mr-4 text-sm sm:text-base"
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
