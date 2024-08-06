import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./ProjectCard";
import { collab_projects } from "../../../asserts/data/collab_projects";

const CollabProjects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
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
    <section id="work">
      <h3 className="text-center">
        Joined <span className="text-orange">Projects</span>
      </h3>
      <h1 className="hlg text-center capitalize my-5">
        Projects I have Built With Other Developers to Gain Collaboration
        Experience
      </h1>
      <h3 className="text-center text-[1.2rem] mb-[5rem]">
        I have contributed in most of these projects as the{" "}
        <span className="text-orange">Main</span> Frontend Developer. There were
        other projects I worked on the backend but very few of them. My role in
        each project has been indicated on the project cards.
      </h3>

      {collab_projects.length ? (
        <Carousel responsive={responsive} className="my-5">
          {collab_projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </Carousel>
      ) : (
        "No available collabe projects"
      )}
    </section>
  );
};
export default CollabProjects;
