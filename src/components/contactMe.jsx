import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import "../Styles/contactMe.css";

const ContactMe = () => {
  return (
    <div id="contact-me-container">
      <h2 className="our-services-heading">Contact Us</h2>
      <div className="contact-methods">
        <div className="contact-methods-row">
          <a href="tel:8317688004" target="_blank" rel="noopener noreferrer">
            <FaPhone className="icons phone" />
            <span>+91 8317688004</span>
          </a>
          <a
            href="https://wa.me/918317688004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icons wathsapp" />
            <span>918317688004</span>
          </a>
        </div>

        <a
          className="single-contactme-link"
          href="mailto:example@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/email.png"
            alt="email-icon"
            style={{ width: "24px", height: "24px" }}
          />

          <span>example@example.com</span>
        </a>
        <div className="contact-methods-row">
          <a
            href="https://www.instagram.com/ravikiranbanala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/insta.png"
              alt="insta-icon"
              style={{ width: "24px", height: "24px" }}
            />
            <span>@ravikiranbanala</span>
          </a>

          <a
            href="https://www.facebook.com/ravikiran.banala.1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icons facebook" />
            <span>@ravikiran.banala.1</span>
          </a>
        </div>

        <a
          className="single-contactme-link"
          href="https://www.youtube.com/@venkataravikrishnabanala8276"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icons youtube" />
          <span>@venkataravikrishnabanala8276</span>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
