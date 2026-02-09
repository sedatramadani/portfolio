import React from "react";

const Cv = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="cv-header-content">
          <h1>Sedat Ramadani</h1>
          <p className="title">Full-Stack Developer</p>
          <p className="contact">sedatramadani@gmail.com | +389 72 687 373</p>
        </div>
      </header>

      <section className="cv-section">
        <h2>Profile</h2>
        <p>
          I am a self-taught full-stack developer who has built practical
          projects using React on the frontend and .NET on the backend. I focus
          on understanding how systems work rather than relying on shortcuts or
          copy-paste solutions. I continuously improve by refining real projects
          and applying industry best practices.
        </p>
      </section>

      <section className="cv-section">
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

      <section className="cv-section">
        <h2>Skills</h2>
        <div className="skills-container">
          {[
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "ASP.NET",
            "WordPress",
          ].map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="cv-section">
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
