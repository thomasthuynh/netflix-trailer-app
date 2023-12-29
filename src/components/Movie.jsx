import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";

const Movie = ({ movie }) => {
  const { handleMovieData } = useContext(MovieContext);

  return (
    <div className="relative mx-1 inline-block w-[160px] cursor-pointer rounded p-2 transition ease-linear hover:scale-105 sm:w-[200px] md:w-[240px] lg:w-[280px]">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="rounded"
      />
      <div
        className="absolute left-0 top-0 h-full w-full text-white opacity-0 hover:bg-black/75 hover:opacity-100"
        onClick={() => handleMovieData(movie?.id)}
      >
        <p className="sm:text-s flex h-full items-center justify-center whitespace-normal p-3 text-center text-xs md:text-base lg:text-lg">
          {movie?.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
