import { MdWeb } from "react-icons/md";

export default function TechStack() {
  return (
    <div className="tech-stack">
      <h3 className="anim">Web Development Stack</h3>

      {/* Frontend Section */}
      <div className="frontend">
        <h4 className="anim">
          Frontend <MdWeb />
        </h4>
        <p className="anim">
          Builds interactive and responsive user interfaces using React.js,
          HTML5, CSS3, and modern JavaScript. Focuses on clean, dynamic, and
          user-friendly designs.
        </p>
      </div>

      {/* Other Frontend Skills Section */}
      <div className="additional-skills">
        <h4 className="anim">Other Skills</h4>
        <p className="anim">
          Experienced with state management (Context API), routing (React
          Router), component libraries (Material-UI, Tailwind CSS), and API
          integration using fetch or Axios. Skilled at building responsive and
          accessible web applications.
        </p>
      </div>
    </div>
  );
}
