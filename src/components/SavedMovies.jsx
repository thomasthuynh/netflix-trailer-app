import React, { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import MovieContext from "../context/MovieContext";
import { db } from "../Firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

import { AiOutlineClose } from "react-icons/ai";

const SavedMovies = () => {
  const { user } = useContext(AuthContext);
  const { savedItems, setSavedItems } = useContext(MovieContext);
  
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setSavedItems(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  return (
    <div>
      <h2 className=" text-white font-bold p-4 sm:text-lg ">Saved Movies</h2>

      <div className="relative flex flex-wrap items-center">
        {savedItems.map((item, id) => (
          <div
            key={id}
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 mx-1 rounded cursor-pointer relative inline-block hover:scale-105 transition ease-linear"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
              alt={item?.title}
              className="rounded"
            />
            <div className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/75 opacity-0 hover:opacity-100">
              <AiOutlineClose className="absolute right-3 top-3 cursor-pointer hover:brightness-75" />
              <p className="text-xs sm:text-s md:text-base lg:text-lg flex justify-center items-center h-full text-center p-3">
                {item?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedMovies;
