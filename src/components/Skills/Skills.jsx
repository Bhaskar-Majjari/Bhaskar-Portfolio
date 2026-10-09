import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "React.js",
      logo: "⚛",
      className: "react-logo",
    },
    {
      name: "JavaScript",
      logo: "JS",
      className: "js-logo",
    },
    {
      name: "HTML",
      logo: "HTML",
      className: "html-logo",
    },
    {
      name: "CSS",
      logo: "CSS",
      className: "css-logo",
    },
    {
      name: "Tailwind CSS",
      logo: "TW",
      className: "tailwind-logo",
    },
    {
      name: "Redux",
      logo: "R",
      className: "redux-logo",
    },
    {
      name: "Material UI",
      logo: "MUI",
      className: "mui-logo",
    },
  ];

  const tools = [
    {
      name: "Git",
      logo: "Git",
      className: "git-logo",
    },
    {
      name: "GitHub",
      logo: "GH",
      className: "github-logo",
    },
    {
      name: "CI/CD",
      logo: "CI",
      className: "cicd-logo",
    },
    {
      name: "Vite",
      logo: "V",
      className: "vite-logo",
    },
    {
      name: "VS Code",
      logo: "VS",
      className: "vscode-logo",
    },
  ];

  const renderItems = (items) => {
    return items.map((item) => (
      <div className="skill-item" key={item.name}>
        <div className={`skill-item-logo ${item.className}`}>
          {item.logo}
        </div>

        <div className="skill-item-name">
          {item.name}
        </div>
      </div>
    ));
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* ================= SKILLS ================= */}

        <div className="skills-group">
          <div className="skills-heading">
            <span className="skills-heading-icon">⚡</span>

            <h2>
              SKILLS<span>_</span>
            </h2>
          </div>

          <div className="skills-grid">
            {renderItems(skills)}
          </div>
        </div>

        {/* ================= TOOLS ================= */}

        <div className="skills-group tools-group">
          <div className="skills-heading">
            <span className="skills-heading-icon">⚙</span>

            <h2>
              TOOLS<span>_</span>
            </h2>
          </div>

          <div className="tools-grid">
            {renderItems(tools)}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;