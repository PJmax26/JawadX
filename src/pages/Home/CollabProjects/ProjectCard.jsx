import projectImg from "../../../asserts/images/projectimg.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 border-2 border-dark hover:border-gray-600 mx-4 rounded-[1.5rem] group transition_slow cursor-default">
      <img
        src={project.img}
        alt="projectImg"
        className="bg-green-500 w-full h-[14rem] group-hover:rounded-none rounded-[1.5rem] transition_slow"
      />
      <div className="p-3">
        <h1 className="my-2 font-[800] text-[1.3rem]">{project.name}</h1>
        <p className="text-gray-600 group-hover:text-gray-300 transition_slow text-lg">
          {project.description}
        </p>
        <div className="flex align-center space-x-2">
          <span className="text-orange">Role:</span>
          <span>{project.role}</span>
        </div>
        <span className="text-orange">Development Tools:</span>
        <div className="flex align-center space-x-2">
          {project.tools.map((img) => (
            <img src={img} className="w-6" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
