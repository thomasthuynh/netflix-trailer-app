import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";

const Movie = ({ movie }) => {
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
      </div>
    </div>
  );
};

export default Movie;
