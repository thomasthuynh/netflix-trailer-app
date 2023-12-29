import React, { useContext } from "react";
import Logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute z-20 flex w-full items-center justify-between p-6 max-w-[2560px]">
      <Link to="/">
        <h1 className="w-24 cursor-pointer font-bold text-red-600 sm:w-36">
          <img className="w-full" src={Logo} alt="Netflix Logo" />
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="mr-4 cursor-pointer text-sm text-white hover:text-white/90 sm:text-base">
              Account
            </button>
          </Link>
          <button
            onClick={handleSignOut}
            className="cursor-pointer rounded bg-red-600 px-5 py-3 text-sm text-white hover:bg-red-700 sm:text-base"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className="mr-4 cursor-pointer text-sm text-white hover:text-white/90 sm:text-base">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="cursor-pointer rounded bg-red-600 px-5 py-3 text-sm text-white hover:bg-red-700 sm:text-base">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
