import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          BHASKAR MAJJARI
        </a>

        {/* Navigation */}
        <nav className="navbar-links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">

          <a
          href="/public\BHASKAR_MAJJARI_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
          >
          <span className="resume-icon">▤</span>
          RESUME
          </a>

          <a href="#contact" className="hire-button">
            HIRE ME
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;