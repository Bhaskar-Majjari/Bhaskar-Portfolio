import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "CCE SURVEY WEB APP",
      category: "WEB APPLICATION",
      type: "PROFESSIONAL PROJECT",
      theme: "cyan",

      description:
        "A React.js web application developed for agricultural survey workflows, focused on responsive interfaces, reusable components, and improving the usability of existing survey processes. The application also includes an AI-powered chat and voice assistant feature to support users during survey activities.",

      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },

    {
      number: "02",
      title: "SHOPZONE",
      category: "E-COMMERCE",
      type: "PERSONAL PROJECT",
      theme: "purple",

      description:
        "A responsive eCommerce web application built with React.js. The application includes product browsing, category filtering, product details, cart and wishlist functionality, and a user-friendly interface designed for different screen sizes.",

      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },

    {
      number: "03",
      title: "PERSONAL PORTFOLIO",
      category: "WEB DEVELOPMENT",
      type: "PERSONAL PROJECT",
      theme: "blue",

      description:
        "A responsive personal portfolio website designed to showcase professional experience, technical skills, projects, and contact information. Built with a modern dark interface and focused on clean component structure and responsive design.",

      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },

    {
      number: "04",
      title: "VOICE RECOGNITION IoT DEVICE",
      category: "IoT / HEALTHCARE",
      type: "ACADEMIC PROJECT",
      theme: "orange",

      description:
        "An IoT-based healthcare project designed for monitoring health parameters through a voice-enabled device. The system uses sensors to collect parameters such as heart rate, oxygen saturation, and temperature and transmit the collected information through an IoT platform.",

      technologies: [
        "Arduino",
        "NodeMCU",
        "Bluetooth",
        "MAX30100",
        "DHT-11",
        "Ubidots",
      ],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* SECTION HEADING */}
        <div className="projects-heading">
          <span className="projects-heading-icon">&lt;/&gt;</span>

          <h1>
            PROJECTS<span>_</span>
          </h1>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className={`project-card ${project.theme}`}
              key={project.number}
            >

              {/* Project Top Section */}
              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

                <button className="project-details">
                  VIEW DETAILS
                  <span>→</span>
                </button>

              </div>

              {/* PROJECT TITLE */}
              <div className="project-title-area">

                <span className="project-category">
                  // {project.category}
                </span>

                <h2>{project.title}</h2>

              </div>

              {/* DESCRIPTION */}
              <p className="project-description">

                <span className="project-arrow">
                  &gt;
                </span>

                <span>
                  {project.description}
                </span>

              </p>

              {/* BOTTOM - TECH STACK */}
              <div className="project-bottom">

                <span className="tech-label">
                  TECH STACK
                </span>

                <div className="project-technologies">

                  {project.technologies.map((technology) => (
                    <span
                      className="project-tech"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;