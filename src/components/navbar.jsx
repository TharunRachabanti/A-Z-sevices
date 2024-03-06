import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Scroll from "../HelperFunctions/scroll";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false); // Track whether the navbar is open or closed

  const handleClick = (id) => {
    Scroll.scrollToElementById(id);
    setIsNavOpen(false); // Close the navbar after navigating to the section
  };

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state of isNavOpen
  };

  // Handle header show/hide animation depending on the scroll direction
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll events
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement) return;

      if (prevScrollPos > currScrollPos)
        currHeaderElement.style.transform = "translateY(0)";
      else currHeaderElement.style.transform = "translateY(-200px)";

      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="navbar">
      <img className="left-context" src="assets/logo1.png" alt="logo" />
      <div className="right-context">
        <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
          <a onClick={() => handleClick("title")} href="/#">
            Home
          </a>
          <a href="#about" onClick={() => handleClick("bio")}>
            About
          </a>
          <a href="/#services" onClick={() => handleClick("our-services")}>
            Services
          </a>
          <a
            href="/#contact"
            onClick={() => handleClick("contact-me-container")}
          >
            Contact
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
