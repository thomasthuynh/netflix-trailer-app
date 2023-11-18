import React, { useEffect, useState } from "react";
import options from "../Options";

import Movie from "./Movie";

const Row = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-white font-bold p-4 sm:text-lg ">{title}</h2>

      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;