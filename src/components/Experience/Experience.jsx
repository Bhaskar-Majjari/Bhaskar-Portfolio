import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/*Section Heading  */}
        <div className="experience-heading">
          <span className="experience-icon"> ♧ </span>

          <h1>
            WORK<span>_</span>EXP
          </h1>
        </div>

        {/* Experience Card */}
        <div className="experience-wrapper">
          <div className="experience-card">

            {/* Top Section */}
            <div className="experience-top">

              <div>
                <h2>
                  SOFTWARE ENGINEER – FRONTEND DEVELOPER
                </h2>

                <div className="company-name">
                  ICROZ Solutions Pvt. Ltd.
                </div>
              </div>

              <div className="experience-date">
                JUN 2025 – PRESENT
              </div>

            </div>

            {/* Experience Content */}
            <div className="experience-content">

              <p>
                <span className="experience-arrow">&gt;</span>
                Developed responsive and user-friendly web interfaces using
                React.js, JavaScript, HTML5, and CSS3.
              </p>

              <p>
                <span className="experience-arrow">&gt;</span>
                Built and enhanced reusable React.js components to improve
                consistency, maintainability, and overall user experience.
              </p>

              <p>
                <span className="experience-arrow">&gt;</span>
                Worked on existing web applications by implementing new
                features, improving functionality, and resolving UI-related
                issues.
              </p>

              <p>
                <span className="experience-arrow">&gt;</span>
                Optimized frontend interfaces for responsiveness, usability,
                and smooth interaction across different screen sizes.
              </p>

              <p>
                <span className="experience-arrow">&gt;</span>
                Collaborated with team members to understand requirements,
                implement UI changes, debug issues, and deliver reliable
                frontend solutions.
              </p>

              <p>
                <span className="experience-arrow">&gt;</span>
                Followed clean and maintainable coding practices while using
                Git and GitHub for source control and project collaboration.
              </p>

            </div>

            {/* Technologies */}
            <div className="experience-technologies">

              <span>REACT.JS</span>
              <span>JAVASCRIPT</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>GIT</span>
              <span>GITHUB</span>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;