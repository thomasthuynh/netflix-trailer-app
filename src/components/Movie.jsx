import React, { useState, useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import MovieContext from "../context/MovieContext";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);

  const { handleMovieData } = useContext(MovieContext);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 mx-1 rounded cursor-pointer relative inline-block hover:scale-105 transition ease-linear">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="rounded"
      />
      <div
        className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/75 opacity-0 hover:opacity-100"
        onClick={() => handleMovieData(movie?.id)}
      >
        <p className="text-xs sm:text-s md:text-base lg:text-lg flex justify-center items-center h-full text-center p-3 whitespace-normal">
          {movie?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 right-4 md:text-xl xl:text-2xl" />
          ) : (
            <FaRegHeart className="absolute top-4 right-4 md:text-xl xl:text-2xl" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
