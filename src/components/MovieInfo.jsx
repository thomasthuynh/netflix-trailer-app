import React from "react";
import ReactPlayer from "react-player";

import { AiTwotoneCloseCircle } from "react-icons/ai";

const MovieInfo = ({ setPlayer }) => {
  return (
    <div className="absolute h-[750px] w-[750px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-33%] border border-white z-10">
      <div className="relative border border-white h-2/3 ">
        <AiTwotoneCloseCircle
          size={40}
          className="absolute -right-4 -top-4 cursor-pointer hover:brightness-90"
          onClick={() => setPlayer(false)}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=42BkpGe8oxg&t=682s"
          width={"100%"}
          height={"100%"}
          controls={true}
          playing={true}
        />
      </div>
    </div>
  );
};

export default MovieInfo;
