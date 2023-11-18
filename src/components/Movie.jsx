import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 cursor-pointer relative inline-block"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/75 opacity-0 hover:opacity-100">
          <p className="text-xs sm:text-s md:text-base lg:text-lg flex justify-center items-center h-full text-center p-3">
            {item?.title}
          </p>
          <p>
            {like ? (
              <FaHeart className="absolute top-4 right-4 md:text-xl xl:text-2xl" />
            ) : (
              <FaRegHeart className="absolute top-4 right-4 md:text-xl xl:text-2xl" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
