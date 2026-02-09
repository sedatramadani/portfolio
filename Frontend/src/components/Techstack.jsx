import { MdWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

export default function TechStack() {
  return (
    <div className="tech-stack">
      <h3>Web Development Stack</h3>

      {/* Frontend Section */}
      <div className="frontend">
        <h4>
          Frontend <MdWeb />
        </h4>
        <p>
          Builds interactive and responsive user interfaces using React.js,
          HTML5, CSS3, and modern JavaScript. Focuses on clean, dynamic, and
          user-friendly designs.
        </p>
      </div>

      {/* Backend Section */}
      <div className="backend">
        <h4>
          Backend <FaDatabase />
        </h4>
        <p>
          Develops server-side logic with .NET and ASP.NET Core, handling
          databases and APIs using Entity Framework Core and SQL Server. Ensures
          secure and scalable backends.
        </p>
      </div>

      {/* Full-Stack Section */}
      <div className="full-stack">
        <h4>
          Full-Stack <MdWeb /> + <FaDatabase />
        </h4>
        <p>
          Combines frontend and backend skills to create complete web
          applications, integrating React interfaces with .NET server logic for
          seamless, end-to-end functionality.
        </p>
      </div>
    </div>
  );
}
