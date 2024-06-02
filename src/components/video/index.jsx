import React from "react";
import YouTube from "react-youtube";

const Video = () => {
  const playerRef = React.useRef(null);
  const options = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    event.target.pauseVideo();
  };
  return (
    <div className="container">
      <div className="video">
        <YouTube videoId="p6CFBpe8zws" opts={options} onReady={onReady} />
      </div>
    </div>
  );
};

export default Video;
