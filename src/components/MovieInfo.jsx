import React, { useEffect, useContext } from "react";
import ReactPlayer from "react-player";
import MovieContext from "../context/MovieContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
import AuthContext from "../context/AuthContext";

import { AiOutlineClose } from "react-icons/ai";
import {
  IoIosAddCircleOutline,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";

const MovieInfo = () => {
  const { selectedMovie, setPlayer, setOverlay, savedItems, setSavedItems } =
    useContext(MovieContext);
  const { user } = useContext(AuthContext);
  const trailerKey = selectedMovie.video?.key;

  const closePlayer = () => {
    setPlayer(false);
    setOverlay(false);
  };

  const movieRef = doc(db, "users", `${user?.email}`);

  const addToWatchlist = async () => {
    if (user?.email) {
      await updateDoc(movieRef, {
        savedMovies: arrayUnion({
          id: selectedMovie.id,
          title: selectedMovie.title,
          img: selectedMovie.img,
        }),
      });
    } else {
      alert("Please sign in to save a movie.");
    }
  };

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

  useEffect(() => {
    if (user?.email) {
      const unsubscribe = onSnapshot(
        doc(db, "users", `${user?.email}`),
        (doc) => {
          setSavedItems(doc.data()?.savedMovies);
        }
      );

      return () => {
        unsubscribe();
      };
    }
  }, [user?.email]);

  const [duplicateItem] = savedItems.filter(
    (item) => item.id === selectedMovie.id
  );

  return (
    <div className="absolute max-w-4xl w-[90%] sm:w-[80%] lg:w-[75%] top-20 left-[50%] translate-x-[-50%] text-white bg-neutral-900 rounded z-40">
      {/* Player */}
      <div className="relative h-[300px] min-[400px]:h-[350px] md:h-[475px] lg:h-[550px]">
        <AiOutlineClose
          size={30}
          onClick={closePlayer}
          className="absolute -right-3 -top-3 cursor-pointer hover:brightness-75 text-black bg-white rounded-full p-1"
        />
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailerKey}`}
          width={"100%"}
          height={"100%"}
          controls={true}
          playing={true}
          className="h-[500px]"
        />
      </div>

      {/* Details  */}
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 p-4 lg:p-6 text-[11px] min-[40px]:text-xs md:text-sm">
        <div className="lg:col-span-3">
          <p className="text-green-400 font-semibold">
            {(selectedMovie.rating * 10).toFixed(0)}% Match
            <span className="ml-2 text-neutral-500">
              {selectedMovie.releaseDate}
            </span>
          </p>
          <p className="py-2 text-neutral-200">{selectedMovie.overview}</p>
        </div>

        {/* Categories  */}
        <div>
          <p className="text-neutral-500">
            Genres:{" "}
            {selectedMovie.genres?.map((genre, index) => (
              <span key={index} className="text-neutral-200">
                {index !== 0 ? ", " : ""}
                {genre}
              </span>
            ))}
          </p>
          <p className="py-0.5 text-neutral-500">
            Original Language:{" "}
            <span className="text-neutral-200">
              {selectedMovie.originalLanguage}
            </span>
          </p>
          {user?.email && duplicateItem?.id === selectedMovie.id ? (
            <div className="my-2 flex items-center">
              <IoIosCheckmarkCircleOutline
                size={30}
                onClick={() => deleteMovie(selectedMovie?.id)}
                className="hover:brightness-75 cursor-pointer mr-1"
              />
              <p className="text-neutral-500">Saved to Watchlist</p>
            </div>
          ) : (
            <div className="my-2 flex items-center">
              <IoIosAddCircleOutline
                size={30}
                onClick={addToWatchlist}
                className="hover:brightness-75 cursor-pointer mr-1"
              />
              <p className="text-neutral-500">Add to Watchlist</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
