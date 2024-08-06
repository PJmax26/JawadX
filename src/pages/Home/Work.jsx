import { projectsList } from "../../Data";
import { FaExternalLinkAlt } from "react-icons/fa";
import FeaturedProjects from "./FeaturedProjects";

const arr = projectsList.slice(0).reverse();

const Work = () => {
  return (
    <section id="work">
      {/* featured */}
      <FeaturedProjects />

      <h1 className="hlg text-center mt-[5rem]">More Of My Persol Projects</h1>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 cursor-default">
        {arr.map(({ id, title, stack, desc, site }) => (
          <div
            key={id}
            className="bg-indigo_dark text-gray-400 hover:text-white transition_slow px-8 py-10 rounded-md relative group"
          >
            <h1 className="text-xl">{title}</h1>
            <p className="text-lg my-5">{stack}</p>
            <p className="mb-8 text-[1.3rem]">{desc}</p>

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
            <div className="w-10 h-10 absolute top-0 right-0 rounded-bl-full font-bold flex justify-center align-senter bg-orange text-white group-hover:opacity-[1] opacity-0 transition_slow">
              {/* {id} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
