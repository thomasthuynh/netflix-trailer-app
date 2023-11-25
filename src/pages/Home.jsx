import React, { useContext } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import MovieContext from "../context/MovieContext";
import MovieInfo from "../components/MovieInfo";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";

const Home = () => {
  const { player, overlay } = useContext(MovieContext);

  return (
    <div className="relative">
      {player && <MovieInfo />}
      {overlay && <Overlay />}
      <Main />
      <Row
        title={"Popular"}
        url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"}
      />
      <Row
        title={"Now Playing"}
        url={
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
        }
      />
      <Row
        title={"Top Rated"}
        url={
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
        }
      />
      <Row
        title={"Upcoming"}
        url={
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        }
      />
    </div>
  );
};

export default Home;
