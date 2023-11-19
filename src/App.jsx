import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <Nav />
      <MovieProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
