import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}

        <div className="hero-content">

          <div className="terminal-label">
            <span>$</span> WHOAMI
          </div>

          <h1 className="hero-name">
            BHASKAR
            <span className="name-accent"> M </span>
          </h1>

          <h2 className="hero-title">
            FRONTEND DEVELOPER
          </h2>

          <div className="hero-stack">
            <span>&gt;</span>
            React.js
            <span>•</span>
            JavaScript
            <span>•</span>
            HTML
            <span>•</span>
            CSS
            
          </div>

          <p className="hero-description">
            Building responsive and user-friendly web applications
            with modern frontend technologies and performance-focused
            interfaces.
          </p>

          {/* Tags */}

          <div className="hero-tags">

            <span>
              ✓ OPEN TO WORK
            </span>

            <span>
              ✓ 1.5 YEARS EXPERIENCE
            </span>

            <span>
              ✓ PRODUCTION SYSTEMS
            </span>

            <span>
              ✓ REACT.JS
            </span>

          </div>

          {/* Buttons */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              VIEW PROJECTS
            </a>

            <a
              href="/BHASKAR_MAJJARI_RESUME.pdf"
              className="secondary-button"
              download
            >
              ↓ DOWNLOAD RESUME
            </a>

          </div>

          {/* Social links */}

          <div className="hero-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>|</span>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <span>|</span>

            <a href="mailto:majjaribhaskar@gmail.com">
              Email
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="status-card">

          <div className="status-corner top-left"></div>
          <div className="status-corner top-right"></div>
          <div className="status-corner bottom-left"></div>
          <div className="status-corner bottom-right"></div>

          <div className="status-header">
            <span>//</span>
            SYSTEM_STATUS
          </div>

          <div className="status-content">

            <div className="status-row">
              <span className="status-label">
                role
              </span>

              <strong>
                Frontend Developer
              </strong>
            </div>

            <div className="status-row">
              <span className="status-label">
                stack
              </span>

              <strong>
                React.js / JavaScript
              </strong>
            </div>

            <div className="status-row">
              <span className="status-label">
                experience
              </span>

              <strong>
                1.5 years
              </strong>
            </div>

            <div className="status-row">
              <span className="status-label">
                focus
              </span>

              <strong>
                Web Applications
              </strong>
            </div>

            <div className="status-row">
              <span className="status-label">
                status
              </span>

              <strong className="available">
                ● open to work
              </strong>
            </div>

          </div>

          <div className="status-footer">
            $ available_immediately
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;