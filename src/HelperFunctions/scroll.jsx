// Scroll.jsx
class Scroll {
    static scrollToElementById = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
  }
  
  export default Scroll;
  