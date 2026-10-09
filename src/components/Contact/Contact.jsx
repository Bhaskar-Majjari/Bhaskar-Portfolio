
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  //Contact details #linkedin, #github, #email
  const email = "majjaribhaskar@gmail.com";
  const linkedin = "https://www.linkedin.com/in/bhaskar-majjari/";
  const github = "https://github.com/Bhaskar-Majjari";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <FaEnvelope className="contact-heading-icon" />
          <h1>
            CONTACT<span>_</span>
          </h1>
        </div>

        {/* Availability Terminal */}
        <div className="contact-status">
          <div className="contact-status-title">
            <span className="status-icon">
              <FaEnvelope />
            </span>
            OPEN TO FRONTEND DEVELOPER / SDE OPPORTUNITIES
          </div>

          <div className="contact-status-line">
            <span>&gt;</span>
            Available for full-time frontend engineering roles.
          </div>

          <div className="contact-status-message">
            <span>$</span>
            Let's build something impactful.
          </div>
        </div>

        {/* Contact Cards */}
        <div className="contact-grid">

          {/* Email */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaEnvelope />
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">EMAIL</span>
              <span className="contact-card-value">
                {email}
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaLinkedinIn />
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">LINKEDIN</span>
              <span className="contact-card-value">
                LinkedIn Profile
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaGithub />
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">GITHUB</span>
              <span className="contact-card-value">
                GitHub Profile
              </span>
            </div>
          </a>

          {/* Portfolio */}
          <a
            href="#home"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaGlobe />
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">PORTFOLIO</span>
              <span className="contact-card-value">
                Back to Home
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
