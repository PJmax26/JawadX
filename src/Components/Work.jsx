import { projectsList } from "../Data";
import { FaExternalLinkAlt } from "react-icons/fa";

const arr = projectsList.slice(0).reverse();

const Work = () => {
  return (
    <section id="work">
      <h3 className="text-center">
        Completed <span className="text-orange">Projects</span>
      </h3>
      <h1 className="hlg text-center">Fun, Personal & Professional Projects</h1>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 cursor-default">
        {arr.map(({ id, title, stack, desc, github, site, rank }) => (
          <div
            key={id}
            className="bg-indigo_dark text-gray-400 px-8 py-10 rounded-md relative"
          >
            <h1 className="text-xl">{title}</h1>
            <p className="text-lg my-5">{stack}</p>
            <p className="text-md mb-8">{desc}</p>

            <div className="w-full flex px-8 py-5 justify-between absolute bottom-0 left-0">
              {/* <a href={github} className="hover:text-gray-300" target="_blank">
                GitHub
              </a> */}
              <a
                href={site}
                className="hover:text-gray-300 flex align-center space-x-1"
                target="_blank"
              >
                <FaExternalLinkAlt />
                <span>view site</span>
              </a>
            </div>
            <div className="w-10 h-10 absolute top-0 right-0 rounded-bl-full font-bold flex justify-center align-senter bg-orange text-white">
              {id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
