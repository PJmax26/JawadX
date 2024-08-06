import { skillsList } from "../../Data";

const Skills = () => {
  return (
    <section>
      <h3 className="text-center">
        My Programming <span className="text-orange">Skills</span>
      </h3>
      <h1 className="hlg text-center">Tools I Work With</h1>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-1 sm:gap-3 p-5">
        {skillsList.map(({ id, title, img }) => (
          <div key={id} className="p-3 rounded-md bg-indigo_dark  text-center">
            <img src={img} alt="" />
            {/* <p className="hsm">{title}</p> */}
            <small>{title}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
