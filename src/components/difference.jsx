import React from "react";
import "../Styles/main.css";
import DifferenceContainer2 from "./differenceContainer2";
import DifferenceContainer1 from "./differenceContainer1";

const Difference = () => {
  return (
    <div>
      <h2 className="our-services-heading">
        What Makes GurukrupaAtoZ Services Difference?
      </h2>{" "}
      <DifferenceContainer1
        title="Comprehensive Solutions"
        explanation=" A-Z Services offers a one-stop destination for a diverse array of essential services, from insurance and job placement to real estate and digital shopping. This comprehensive approach saves you time and effort by centralizing your needs."
      />
      <DifferenceContainer2
        title="Expert Guidance"
        explanation="Our team of professionals is highly experienced and dedicated to providing expert guidance in their respective fields. You can trust that you're receiving top-notch advice and support."
      />
      <DifferenceContainer1
        title="Diverse Service Range"
        explanation=" A-Z Services extends its support beyond the basics. We offer a wide range of services, including food supply consultancy and social, cultural, and spiritual services, making us a versatile and holistic solution for your requirements."
      />
      <DifferenceContainer2
        title="Positive Impact"
        explanation="A-Z Services is dedicated to making a positive impact on the lives of our customers and the community as a whole. By choosing us, you're contributing to a greater social good."
      />
      <DifferenceContainer1
        title="Trust and Reliability"
        explanation="With a track record of reliability and trustworthiness, A-Z Services is a name you can depend on. We value the trust our customers place in us and strive to exceed their expectations."
      />
      <DifferenceContainer2
        title="Customized Solutions"
        explanation="We understand that each individual's needs are unique. A-Z Services offers personalized solutions tailored to your specific requirements, ensuring you get exactly what you need."
      />
    </div>
  );
};

export default Difference;
