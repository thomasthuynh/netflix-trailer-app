import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import MovieContext from "../context/MovieContext";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);

  const { selectedMovie, setSelectedMovie, setPlayer } =
    useContext(MovieContext);

  const handleMovieData = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie?.id}?language=en-US`, {
        params: {
          api_key: "02a015f767f49fbd46124014022d6a5c",
          append_to_response: "videos",
        },
      })
      .then((response) => {
        const movieData = response.data;
        // console.log(movieData);

        setSelectedMovie({
          id: movieData.id,
          title: movieData.title,
          overview: movieData.overview,
          originalLanguage: movieData.original_language,
          genres: movieData.genres.map((genre) => genre.name),
          video:
            movieData.videos.results.find(
              (video) => video.name === "Official Trailer"
            ) || movieData.videos.results[0],
        });
      })
      .catch((err) => console.log(err));

    setPlayer(true);
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 mx-1 cursor-pointer relative inline-block hover:scale-105 transition ease-linear">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div
        className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/75 opacity-0 hover:opacity-100"
        onClick={handleMovieData}
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
