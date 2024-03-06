// ScrollUpButton.jsx
import { React, useState, useEffect } from "react";
import Scroll from "../HelperFunctions/scroll";
import "../Styles/scroll-up-button.css"; // Define styles for the button
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 2000) {
        // Adjust the scroll threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    Scroll.scrollToElementById("navbar");
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : "hidden"}`}
      onClick={handleClick}
    >
      <div>
        <FaArrowUp />
        <span className="scrollToTop-text">Scroll to Top</span>
      </div>
    </button>
  );
};

export default ScrollUpButton;
