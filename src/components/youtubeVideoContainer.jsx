// YoutubeVideoContainer.jsx
import React from "react";
import "../Styles/youtubeVideoContainer.css";

const YoutubeVideoContainer = ({ link = "" }) => {
  return (
    <div className="youtube-container">
      <iframe
        className="youtube-video"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideoContainer;
