import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      setHasWindow(true);
    }
  }, [])

  return (
    <>
    {hasWindow && (<ReactPlayer
      url="/img/video.mp4"
      width="100%"
      pip
      controls="true"
      light="img/video.jpg"
      playing
    />)}
    </>
  );
};

export default Video;
