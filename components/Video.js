const Video = () => {
  return (
    <video controls width="100%" poster="img/video.jpg">
      <source src="/img/video.mp4" type="video/webm" />
      <source src="/img/video.mp4" type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default Video;
