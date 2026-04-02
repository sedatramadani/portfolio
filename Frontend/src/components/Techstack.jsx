import { MdWeb } from "react-icons/md";

export default function TechStack() {
  return (
    <div className="col-span-1 md:col-span-2 mt-12 flex flex-col md:flex-row gap-10 w-full anim">
      <h3 className="text-xl font-extrabold text-[#b7c9d8] md:w-[180px] anim">
        Web Development Stack
      </h3>

      <div className="flex-1 anim">
        <h4 className="flex items-center gap-2 text-white mb-3 font-semibold anim">
          Frontend <MdWeb />
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed anim">
          React.js, HTML5, CSS3, modern JavaScript. Clean and dynamic UI.
        </p>
      </div>

      <div className="flex-1 anim">
        <h4 className="text-white mb-3 font-semibold anim">Other Skills</h4>
        <p className="text-gray-400 text-sm leading-relaxed anim">
          Context API, React Router, Tailwind CSS, API integration, responsive
          and accessible applications.
        </p>
      </div>
    </div>
  );
}
