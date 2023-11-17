import React, { useState, useEffect } from "react";

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
    <div className="w-full h-full">
      {featuredMovie && (
        <img
          src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default Main;
