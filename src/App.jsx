import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Nav />
      <AuthContextProvider>
        <MovieProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MovieProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
