import { createContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

  const [selectedMovie, setSelectedMovie] = useState([]);
  const [player, setPlayer] = useState(false)

  return <MovieContext.Provider value={{ selectedMovie, setSelectedMovie, player, setPlayer }}>{children}</MovieContext.Provider>;
};

export default MovieContext;
