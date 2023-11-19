import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import MovieInfo from "../components/MovieInfo";
import MovieContext from "../context/MovieContext";

import { FaStar } from "react-icons/fa";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState();
  const { player } = useContext(MovieContext);

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
      .then((response) => setMovies(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFeaturedMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);

  return (
    <div className="featuredImg w-full relative text-white h-[550px] xl:h-[700px]">
      {player && <MovieInfo />}
      <div className="absolute w-full h-[550px] xl:h-[700px] bg-gradient-to-r from-black"></div>
      {featuredMovie && (
        <img
          src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`}
          alt={featuredMovie.title}
          className="w-full h-full object-cover object-top transition"
        />
      )}
      <div className="absolute top-[50%] translate-y-[-50%] p-4 max-w-[90%] md:max-w-[65%] xl:max-w-[40%]">
        <div>
          <h1 className="text-4xl sm:text-5xl my-4">{featuredMovie?.title}</h1>
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
          <button className="bg-black border hover:bg-white hover:text-black px-5 py-3 rounded cursor-pointer text-sm sm:text-base">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
