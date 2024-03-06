import React from "react";
import "../Styles/differenceContainer.css";

const DifferenceContainer1 = ({ title = "", explanation = "" }) => {
  return (
    <div className="difference-container">
      <div className="explanation">
        <div className="text-with-arrow">
          <h3>{title}</h3>
          <img src="assets/Arrow_right.png" alt="Arrow_left" />
        </div>
        <div className="sizedBox"></div>

        <p>
          {explanation}
        </p>
      </div>
    </div>
  );
};

export default DifferenceContainer1;
