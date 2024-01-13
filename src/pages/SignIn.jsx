import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("test@email.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="relative h-screen w-full max-w-[2560px]">
        <img
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/34935dbf-8bc4-44d7-a790-3128297a8e45/CA-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="absolute left-0 top-0 h-screen w-full bg-black/60"></div>
        <div className="absolute left-[50%] top-[50%] h-[425px] w-[85%] max-w-[350px] translate-x-[-50%] translate-y-[-50%] rounded bg-black/75 px-8 py-12 text-white min-[400px]:px-12 sm:h-[550px] sm:max-w-[425px] sm:px-16 sm:py-20">
          <h1 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Sign In
          </h1>
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="mx-auto flex w-[90%] flex-col"
          >
            {error && (
              <p className="bg-red-500 p-2 text-center text-sm">{error}</p>
            )}
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
              className="my-4 rounded bg-gray-500 p-2 outline-0"
            />
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
              className="mb-4 rounded bg-gray-500 p-2 outline-0"
            />
            <button className="my-3 cursor-pointer rounded bg-red-600 px-5 py-3 text-sm text-white hover:bg-red-700 sm:text-base">
              Sign In
            </button>
            <p className="py-4 text-sm text-neutral-500 sm:text-base">
              Don't have an account yet?{" "}
              <Link to="/signup">
                <span className="text-white hover:opacity-75">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
