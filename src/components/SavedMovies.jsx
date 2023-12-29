import React, { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import MovieContext from "../context/MovieContext";
import { db } from "../Firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

import { AiOutlineClose } from "react-icons/ai";
import Popcorn from "../assets/Popcorn.png";

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
        unsubscribe();
      };
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
    <div className="min-h-[450px]">
      <h2 className=" p-4 font-bold text-white sm:text-lg">Saved Movies</h2>

      {savedItems.length === 0 ? (
        <div className="flex translate-y-[25%] flex-col items-center justify-center">
          <img src={Popcorn} alt="/" className="w-24 sm:w-36" />
          <h2 className="p-4 text-center font-bold text-white sm:text-xl">
            You currently have no saved movies!
          </h2>
        </div>
      ) : (
        <div className="relative flex flex-wrap items-center px-1.5">
          {savedItems.map((item, id) => (
            <div
              key={id}
              className="relative mx-1 inline-block w-[160px] cursor-pointer rounded p-2 transition ease-linear hover:scale-105 sm:w-[200px] md:w-[240px] lg:w-[280px]"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
                className="rounded"
              />
              <div className="absolute left-0 top-0 h-full w-full text-white opacity-0 hover:bg-black/75 hover:opacity-100">
                <AiOutlineClose
                  onClick={() => deleteMovie(item?.id)}
                  className="absolute right-3 top-3 cursor-pointer hover:brightness-75"
                />
                <p className="sm:text-s flex h-full items-center justify-center p-3 text-center text-xs md:text-base lg:text-lg">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedMovies;
