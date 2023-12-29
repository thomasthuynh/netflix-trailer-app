import Home from "./pages/Home";
import Nav from "./components/Nav";
import Account from "./pages/Account";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto max-w-[2560px]">
      <AuthContextProvider>
        <Nav />
        <MovieProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </MovieProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
