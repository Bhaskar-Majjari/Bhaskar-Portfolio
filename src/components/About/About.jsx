import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span className="about-icon">♙</span>
          <h1>
            ABOUT<span>_</span>ME
          </h1>
        </div>

        <div className="about-layout">

          {/* LEFT - TERMINAL */}
          <div className="about-terminal">

            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              <span className="terminal-title">ABOUT.TXT</span>
            </div>

            <div className="terminal-content">

              <p>
                <span className="terminal-arrow">&gt;</span>
                Currently working as a Software Engineer, focused on building
                responsive and user-friendly web applications using React.js.
              </p>

              <p>
                <span className="terminal-arrow">&gt;</span>
                Frontend Developer with experience in developing reusable
                components, improving UI functionality, and creating
                responsive interfaces.
              </p>

              <p>
                <span className="terminal-arrow">&gt;</span>
                Strong focus on React.js, JavaScript, HTML, CSS and modern
                frontend development practices.
              </p>

              <p>
                <span className="terminal-arrow">&gt;</span>
                Experienced in working on real-world web applications,
                improving existing interfaces, and delivering clean and
                maintainable frontend solutions.
              </p>

              <p>
                <span className="terminal-arrow">&gt;</span>
                Passionate about learning new technologies and building
                efficient, scalable and user-friendly web experiences.
              </p>

            </div>
          </div>

          {/* RIGHT - INFO CARDS */}
          <div className="about-cards">

            <div className="about-card">
              <span className="card-label">STATUS</span>
              <h2>Open To Work</h2>
              <p>Available for new opportunities</p>
            </div>

            <div className="about-card">
              <span className="card-label">EXPERIENCE</span>
              <h2>1+ Years</h2>
              <p>Frontend Development</p>
            </div>

            <div className="about-card">
              <span className="card-label">EDUCATION</span>
              <h2>B.Tech </h2>
              <p>Electronics & Communication Engineering</p>
            </div>

            <div className="about-card">
              <span className="card-label">SPECIALIZATION</span>
              <h2>React.js</h2>
              <p>Frontend Web Development</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;