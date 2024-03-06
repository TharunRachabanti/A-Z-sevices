import "../Styles/main.css";
import "../Styles/container.css";

function Container({
  title = "",
  image = "",
  fontSize = "",
  additionalInfo = [],
}) {
  return (
    <div className="container">
      <img id="containerImage" src={image} alt="Your Image" />
      <br />
      <div className="additional-info">
        <ul>
          {additionalInfo.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="text-container">
        <div className="text">
          <p>{title}</p>
          <p>Consultancy</p>
        </div>
        <br />
        <button id="pdfButton">Get Brochure</button>
        <div className="additional-text"></div>
      </div>
    </div>
  );
}

export default Container;
