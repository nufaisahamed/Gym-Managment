import React from 'react';
import Video from "../assets/navbar/video.mp4"

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-start  bg-transparent py-6">
      <video
        className="w-full max-w-2xl rounded-lg shadow-lg  "
        controls
        autoPlay
        muted
        loop
      >
        <source
          src={Video} // Replace with your video URL or local file
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

{/* <iframe title="vimeo-player" src= width="640" height="360" frameborder="0"    allowfullscreen></iframe> */}