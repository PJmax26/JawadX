import { featured_projects } from "../../asserts/data/featured_projects";
import "../../App.scss";
import "../../asserts/styles/work.scss";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BookOpen } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <div id="work" className="work px-[5%]">
      <h3 className="text-center">
        Featured <span className="text-orange">Projects</span>
      </h3>
      <h1 className="hlg text-center mb-5">My Best Work So Far</h1>

      <div>
        {featured_projects && (
          <div>
            {featured_projects.map((featured) => (
              <div
                key={featured.id}
                className={`featured_box sm:mb-0 mb-10  md:my-10 flex align-center md:flex-row flex-col ${
                  featured.id % 2 == 0
                    ? "jinx md:flex-row-reverse flex-col"
                    : ""
                }`}
              >
                <div className="img">
                  <img src={featured.banner} alt="" />
                </div>
                <div className="flex-[1] place-middle md:mt-0 mt-10 pl-4">
                  <div>
                    <h1 className="font-[900] text-[3rem]">{featured.name}</h1>
                    <p className="my-3 text-gray-300 text-lg">
                      {featured.description}
                    </p>

                    <div className="flex align-center space-x-3">
                      <Link
                        to={`/projects/${featured.id}/${featured.name}`}
                        className="border-2 w-fit my-4 border-grey hover:border-white transition_ease py-3 px-5 rounded-xl flex align-center space-x-2"
                      >
                        <BookOpen />
                        <span>Read More</span>
                      </Link>
                      <a
                        href=""
                        className="border-2 w-fit my-4 border-grey hover:border-white transition_ease py-3 px-5 rounded-xl flex align-center space-x-2"
                      >
                        <FaExternalLinkAlt />
                        <a href={featured.link} target="_blank">
                          Visit Site
                        </a>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <div className="my-10 py-10">
        {featured_projects.length &&
          featured_projects.map((project) => (
            <div
              key={project.id}
              className="relative grid grid-cols-2 gap-2 my-[2rem]"
            >
              {project.banners.map((banner) => (
                <img
                  src={banner}
                  alt=""
                  className="w-[100%] hover:z-10 transition_slow"
                />
              ))}

              <div className="bg-indigo_dark border-2 text-gray-500 hover:text-gray-300 hover:border-grey border-indigo_dark transition_ease absolute right-[25%] top-[30%] w-1/2 p-5 cursor-default">
                <h1 className="font-[900] text-[3rem]">{project.name}</h1>
                <p className="text-[1.3rem] my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis debitis nesciunt explicabo. Exercitationem error quas
                  accusamus tenetur eaque dignissimos! Rerum quos veniam eius,
                  nihil a voluptatem minus fugiat soluta tenetur!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-5">
                  <a
                    href=""
                    className="border-2 border-grey hover:bg-white hover:text-indigo_dark transition_ease py-3 px-5 rounded-xl flex align-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>Visit Site</span>
                  </a>
                  <Link
                    to={`projects/${project.id}`}
                    className="border-2 border-grey hover:bg-white hover:text-indigo_dark transition_ease py-3 px-5 rounded-xl flex align-center space-x-2"
                  >
                    <Info />
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
};
export default FeaturedProjects;
