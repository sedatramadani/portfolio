const Cv = () => {
  return (
    <div className="bg-white text-black w-full max-w-[900px] mx-auto rounded-lg shadow-xl p-6 sm:p-10 lg:p-14 anim">
      <header className="border-b-2 border-black pb-6 mb-8 anim">
        <h1 className="text-3xl sm:text-4xl font-extrabold anim">
          Sedat Ramadani
        </h1>
        <p className="text-lg font-semibold text-gray-700 mt-2 anim">
          Frontend Developer
        </p>
        <p className="text-sm text-gray-600 mt-3 anim">
          sedatramadani23mk@gmail.com | +389 72 687 373
        </p>
      </header>

      <section className="mb-8 anim">
        <h2 className="uppercase font-bold text-sm tracking-wider border-l-4 border-black pl-3 mb-4 anim">
          Profile
        </h2>
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base anim">
          I am a self-taught Frontend Developer who has built practical projects
          using React.js. I focus on creating clean, responsive, and
          user-friendly interfaces, prioritizing understanding how applications
          work rather than relying on shortcuts or copy-paste solutions.
        </p>
      </section>

      <section className="mb-8 anim">
        <h2 className="uppercase font-bold text-sm tracking-wider border-l-4 border-black pl-3 mb-4 anim">
          Education
        </h2>

        <div className="anim">
          <h3 className="font-bold text-base mb-2 anim">
            Bachelor's of Faculty of Contemporary Sciences and Technologies
          </h3>
          <p className="text-sm text-gray-600 mb-3 anim">
            South East European University | 2014 – 2017 | Tetovo
          </p>

          <p className="text-gray-800 leading-relaxed text-sm sm:text-base anim">
            During my university studies, I built a solid academic foundation
            and successfully graduated, driven by continuous self-improvement
            and practical projects.
          </p>
        </div>
      </section>

      <section className="mb-8 anim">
        <h2 className="uppercase font-bold text-sm tracking-wider border-l-4 border-black pl-3 mb-4 anim">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3 anim">
          {["React.js", "JavaScript", "HTML5", "CSS3", "WordPress"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-xs sm:text-sm font-semibold transition hover:bg-black hover:text-white anim"
              >
                {skill}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="anim">
        <h2 className="uppercase font-bold text-sm tracking-wider border-l-4 border-black pl-3 mb-4 anim">
          Languages
        </h2>

        <ul className="space-y-2 text-sm sm:text-base text-gray-800 anim">
          <li className="anim">Albanian — Native</li>
          <li className="anim">English — Fluent</li>
          <li className="anim">Macedonian — Fluent</li>
          <li className="anim">Turkish — Fluent</li>
        </ul>
      </section>
    </div>
  );
};

export default Cv;
