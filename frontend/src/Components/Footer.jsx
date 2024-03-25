import React from "react";
import "./Css/Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <hr className="footer-hr" />
      <div className="subscription_links">
        <section className="footer-subscription">
          <Link to="/" className="footer-logo">Book Boulevard</Link>
          <p className="footer-subscription-text">
            Hey there, bookworms! Welcome to Book Boulevard, your go-to destination for e-book adventures.
            Get ready to dive into a world where stories leap off the screen and imagination knows no bounds.
            Whether you're into magical realms, heart-pounding adventures, or heartwarming romances, we've got something for every kind of reader.
            Join us as we embark on thrilling journeys between the pages, where the only limit is your imagination.
            Let's turn the next page together and discover the magic of reading.
          </p>
        </section>
        <div className="footer-links">
          <div className="footer-link-items">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About Us</Link>
            <Link to="/testimonials">Testimonials</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Book Boulevard © 2024</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
