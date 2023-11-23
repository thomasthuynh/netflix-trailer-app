import React, { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import MovieContext from "../context/MovieContext";
import { db } from "../Firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

import { AiOutlineClose } from "react-icons/ai";

const SavedMovies = () => {
  const { user } = useContext(AuthContext);
  const { savedItems, setSavedItems } = useContext(MovieContext);

  const movieRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    if (user?.email) {
      const unsubscribe = onSnapshot(movieRef, (doc) => {
        setSavedItems(doc.data()?.savedMovies);
      });

      return () => {
        unsubscribe()
      }
    }
  }, [user?.email]);

  const deleteMovie = async (passedId) => {
    try {
      const result = savedItems.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className=" text-white font-bold p-4 sm:text-lg ">Saved Movies</h2>

      <div className="relative flex flex-wrap items-center px-1.5">
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
              <AiOutlineClose
                onClick={() => deleteMovie(item?.id)}
                className="absolute right-3 top-3 cursor-pointer hover:brightness-75"
              />
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
