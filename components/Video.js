import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <ReactPlayer
      url="/img/video.mp4"
      width="100%"
      controls="true"
      light="img/video.jpg"
      playing
    />
  );
};

export default Video;
