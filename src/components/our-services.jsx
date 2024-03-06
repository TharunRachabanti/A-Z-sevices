import Container from "./container";
import "../Styles/main.css";
import "../Styles/container.css";


function OurServices() {
  const additionalInfo = {
    Insurace: [
      "Providing new policies.",
      "Service towards old policies.",
      "Claims and loan services.",
      "Nominee and other changes in policies.",
      "Other Life Insurances: Tata, ICICI, BAJAJ.",
      "Vehicles and General Insurances.",
    ],

    Job: [
      "Technical Jobs.",
      "Non-Technical Jobs.",
      "Skilled Jobs.",
      "Semi-Skilled Jobs.",
      "Unskilled Jobs.",
      "Part-time Jobs.",
      "Jobs for retaired persons.",
      "Jobs for women.",
    ],
    RealEstate: [
      "New open plots.",
      "Appartment plots.",
      "Individual houses.",
      "Old houses.",
      "Re-sale properties.",
      "Rented houses.",
      "Sites for lease.",
    ],

    Shopping: [
      "Furniture products.",
      "Clothes.",
      "Grocerories.",
      "Presentation Articles.",
      "Cosmetic Products.",
      "Herbal Products.",
    ],

    FoodSupply: [
      "Cattering Services.",
      "Meals Supply.",
      "Providing cheffs.",
      "Event Management in Food Supply,",
    ],
    Spirutual: [
      "Providing information about social serice organization.",
      "Guidness for social services.",
      "Providing blood donors infomation.",
      "Providing contacts.",
    ],
  };
  return (
    <div id="our-services">
      <h2 className="our-services-heading">Our Services</h2>
      <div className="our-services-div">
        <div className="container-row">
          <Container
            title="Insurace"
            image="../assets/img1.png"
            additionalInfo={additionalInfo["Insurace"]}
          />
          <Container
            title="Job"
            image="../assets/img2.png"
            additionalInfo={additionalInfo["Job"]}
          />
          <Container
            title="Real Estate"
            image="../assets/img3.png"
            additionalInfo={additionalInfo["RealEstate"]}
          />
        </div>
        <div className="container-row">
          <Container
            title="Shopping"
            image="../assets/img4.png"
            fontSize="25px"
            additionalInfo={additionalInfo["Shopping"]}
          />
          <Container
            title="Food Supply"
            image="../assets/img5.png"
            additionalInfo={additionalInfo["FoodSupply"]}
          />
          <Container
            title="Spirutual"
            image="../assets/img6.png"
            fontSize="25px"
            additionalInfo={additionalInfo["Spirutual"]}
          />
        </div>
      </div>
      <div className="space"></div>
      <div className="space"></div>
    </div>
  );
}

export default OurServices;
