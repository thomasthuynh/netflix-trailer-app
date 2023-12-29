import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Movie from "./Movie";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  const [leftSlider, setLeftSlider] = useState(false);
  const [rightSlider, setRightSlider] = useState(true);

  const sliderRef = useRef();

  const slideLeft = () => {
    sliderRef.current.scrollLeft =
      sliderRef.current.scrollLeft - sliderRef.current.clientWidth + 100;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft =
      sliderRef.current.scrollLeft + sliderRef.current.clientWidth - 100;
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
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      if (sliderRef.current.scrollLeft >= maxScrollLeft) {
        setRightSlider(false);
      } else {
        setRightSlider(true);
      }
    };

    sliderRef.current.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    axios
      .get(url, {
        params: {
          api_key: "02a015f767f49fbd46124014022d6a5c",
        },
      })
      .then((response) => setMovies(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className=" p-4 font-bold text-white sm:text-lg ">{title}</h2>

      <div className="group relative flex items-center">
        <FaChevronLeft
          size={50}
          onClick={slideLeft}
          className={
            leftSlider
              ? "absolute left-4 z-10 hidden cursor-pointer rounded-full bg-white p-2 opacity-75 hover:opacity-100 group-hover:block"
              : "hidden"
          }
        />
        <div
          ref={sliderRef}
          className="relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap px-1.5 scrollbar-hide"
        >
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
        <FaChevronRight
          size={50}
          onClick={slideRight}
          className={
            rightSlider
              ? "absolute right-4 z-10 hidden cursor-pointer rounded-full bg-white p-2 opacity-75 hover:opacity-100 group-hover:block"
              : "hidden"
          }
        />
      </div>
    </div>
  );
};

export default Row;
