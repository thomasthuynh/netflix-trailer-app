import { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [player, setPlayer] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const handleMovieData = (id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
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
          rating: movieData.vote_average,
          releaseDate: movieData.release_date,
          originalLanguage: movieData.original_language,
          img: movieData.backdrop_path,
          genres: movieData.genres.map((genre) => genre.name),
          video:
            movieData.videos.results.find(
              (video) => video.name === "Official Trailer"
            ) || movieData.videos.results[0],
        });
      })
      .catch((err) => console.log(err));

    setPlayer(true);
    setOverlay(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MovieContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        player,
        setPlayer,
        handleMovieData,
        overlay,
        setOverlay,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
