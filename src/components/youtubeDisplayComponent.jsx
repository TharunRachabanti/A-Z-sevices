// YoutubeDisplayComponent.jsx
import React from "react";
import YoutubeVideoContainer from "./youtubeVideoContainer";
import "../Styles/youtubeDisplayComponent.css";
import "../Styles/main.css";

const YoutubeDisplayComponent = () => {
  return (
    <div className="youtube-Display-container">
      <h2 className="our-services-heading">Explore Our Services</h2>
      <p className="section-description">
        Check out our services and see what we have to offer.
      </p>
      <div className="youtube-video-row">
        <YoutubeVideoContainer link="https://www.youtube.com/embed/kqmeIpRbJhk?si=m5W2l5yDtuex0KRO" />
        <YoutubeVideoContainer link="https://www.youtube.com/embed/D13x8YdrNfs?si=CgfCAp2O4LdvXz1v" />
        <YoutubeVideoContainer link="https://www.youtube.com/embed/eKSSkbJ3r8A?si=ZZAVF97ChYQ9_8iN" />
      </div>
    </div>
  );
};
export default YoutubeDisplayComponent;
