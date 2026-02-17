import React from "react";

const Cv = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="cv-header-content">
          <h1>Sedat Ramadani</h1>
          <p className="title">Frontend Developer</p>
          <p className="contact">
            sedatramadani23mk@gmail.com | +389 72 687 373
          </p>
        </div>
      </header>

      <section className="cv-profile">
        <h2>Profile</h2>
        <p>
          I am a self-taught Frontend Developer who has built practical projects
          using React.js. I focus on creating clean, responsive, and
          user-friendly interfaces, prioritizing understanding how applications
          work rather than relying on shortcuts or copy-paste solutions. I
          continuously improve by refining real projects and applying industry
          best practices in frontend development.
        </p>
      </section>

      <section className="cv-education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>
            Bachelor's of Faculty of Contemporary Sciences and Technologies
            South East European University | 2014-2017 - Tetovo
          </h3>
          <p className="education-description">
            During my university studies, I built a solid academic foundation
            and successfully graduated, but I realized early that real growth
            required more than coursework alone. While my degree provided
            structure and discipline, my strongest progress came from
            self-driven learning, experimentation, and building projects beyond
            the classroom. This combination of formal education and independent
            development shaped my practical mindset and motivated me to
            continuously improve as a developer.
          </p>
        </div>
      </section>

      <section className="cv-skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {["React.js", "JavaScript", "HTML5", "CSS3", "WordPress"].map(
            (skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="cv-language">
        <h2>Languages</h2>
        <ul className="languages-list">
          <li>Albanian — Native</li>
          <li>English — Fluent</li>
          <li>Macedonian — Fluent</li>
          <li>Turkish — Fluent</li>
        </ul>
      </section>
    </div>
  );
};

export default Cv;
