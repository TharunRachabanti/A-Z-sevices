import React from "react";
import "../Styles/differenceContainer.css";

const DifferenceContainer2 = ({ title = "", explanation = "" }) => {
  return (
    <div className="difference-container">
      <div className="explanation">
        <p>{explanation}</p>
        <div className="sizedBox"></div>

        <div className="text-with-arrow">
          <h3>{title}</h3>
          <img src="assets/Arrow_left.png" alt="Arrow_left" />
        </div>
      </div>
    </div>
  );
};

export default DifferenceContainer2;
