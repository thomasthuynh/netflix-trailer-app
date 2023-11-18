import React, { useState } from "react";
import Main from "../components/Main";
import Row from "../components/Row";

const Home = () => {
  const [player, setPlayer] = useState(false)

  return (
    <div className="relative">
      <Main player={player} setPlayer={setPlayer}/>
      <Row title={"Popular"} url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"} setPlayer={setPlayer}/>
      <Row title={"Top Rated"} url={"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"} setPlayer={setPlayer}/>
      <Row title={"Upcoming"} url={"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"} setPlayer={setPlayer}/>
    </div>
  );
};

export default Home;
