import React, { useEffect, useState, useRef } from "react";
import options from "../Options";
import Movie from "./Movie";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [leftSlider, setLeftSlider] = useState(false);
  const [rightSlider, setRightSlider] = useState(true);
  const sliderRef = useRef();

  const slideLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - sliderRef.current.clientWidth + 100;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + sliderRef.current.clientWidth - 100;
  };

  useEffect(() => {
    const handleScroll = () => {
      // Left slider
      if (sliderRef.current.scrollLeft > 0) {
        setLeftSlider(true);
      } else {
        setLeftSlider(false);
      }

      // Right slider
      const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      if (sliderRef.current.scrollLeft >= maxScrollLeft) {
        setRightSlider(false);
      } else {
        setRightSlider(true);
      }
    };

    sliderRef.current.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className=" text-white font-bold p-4 sm:text-lg ">{title}</h2>

      <div className="relative flex items-center group">
        <FaChevronLeft
          size={50}
          onClick={slideLeft}
          className={
            leftSlider
              ? "absolute left-4 hidden bg-white rounded-full opacity-75 hover:opacity-100 z-10 cursor-pointer group-hover:block p-2"
              : "hidden"
          }
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <FaChevronRight
          size={50}
          onClick={slideRight}
          className={
            rightSlider
              ? "absolute right-4 hidden bg-white rounded-full opacity-75 hover:opacity-100 z-10 cursor-pointer group-hover:block p-2"
              : "hidden"
          }
        />
      </div>
    </div>
  );
};

export default Row;
