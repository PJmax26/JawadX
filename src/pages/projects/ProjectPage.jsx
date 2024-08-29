"use client";
import { useParams, Link } from "react-router-dom";
import "../../asserts/styles/projects.scss";
import { featured_projects } from "../../asserts/data/featured_projects";
import { ArrowLeft } from "lucide-react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProjectPage = () => {
  const { id } = useParams();
  const project = featured_projects.find(
    (project) => project.id.toString() === id
  );

  const responsive = {
    // superLargeDesktop: {
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 7,
    // },
    // desktop: {
    //   breakpoint: { max: 3000, min: 1024 },
    //   items: 5,
    // },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="project_page">
      <div id="header" className="projects_banner place-middle flex-col">
        <h1 className="font-[900] text-[2rem] md:text-[3rem]">
          {project.name}
        </h1>
        <Link to="/" className="flex align-center space-x-1 hover:underline">
          <ArrowLeft />
          <span>Home</span>
        </Link>
      </div>

      <div className="project_info px-[5%] py-[3rem]">
        {/* text */}
        <div>
          <span className="text-white text-[1.5rem] font-[700]">
            About This Project
          </span>
          {/* <p className="my-5">{project.description}</p> */}
          <p className="my-3 text-gray-300 text-[20px]">
            {project.description}
          </p>

          {/* tools section */}
          <div className="project_features mt-5">
            <h3 className="font-[700] text-xl">
              Development Tools (Libraries)
            </h3>
            <div className="flex align-center space-x-2">
              {project.technologies.map((tech) => (
                <img src={tech} alt="tech_tool" className="w-[3rem]" />
              ))}
            </div>
            {/* <ul>
              {project.tools.map((tool) => (
                <li key={project.id} className="flex align-center space-x-2">
                  <p>{tool.name} :</p>
                  <small className="text-[16px]">{tool.usage}</small>
                </li>
              ))}
            </ul> */}
          </div>

          {/* features section */}
          <div className="project_features mt-5">
            <h3 className="font-[700] text-xl">Project Features</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={project.id}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* gallery */}
        <div className="gallery">
          {project.images.map((image) => (
            <img
              key={project.id}
              src={image}
              alt="project_img"
              className="mb-5"
            />
          ))}
        </div>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          className="w-full"
        >
          {project.images.map((image) => (
            <img
              key={project.id}
              src={image}
              alt="project_img"
              className="mb-5 h-[10rem]"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ProjectPage;
