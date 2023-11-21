import React, { useContext } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import MovieContext from "../context/MovieContext";
import MovieInfo from "../components/MovieInfo";


const Home = () => {
  const { player } = useContext(MovieContext);

  return (
    <div className="relative">
      {player && <MovieInfo />}
      <Main/>
      <Row title={"Popular"} url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"}/>
      <Row title={"Top Rated"} url={"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"}/>
      <Row title={"Upcoming"} url={"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"}/>
    </div>
  );
};

export default Home;
