const Experience = ({ active }) => {
  return (
    <div className={` ${active === "experience" ? "block" : "hidden"}`}>
      <div className="w-full mt-5 sm:w-2/3 md:w-1/2 space-y-5 mx-auto border-l-2 border-grey pl-5 py-5">
        <article id="experience_box" className="relative">
          <div className="sm:flex align-center space-x-2">
            <h1 className="hmd">Frontend Developer</h1>
            <p className="hidden sm:block">-</p>
            <span className="hmd font-bold text-gray-500">2022 - Date</span>
          </div>
          <div className="hmd text-orange">Tuuli Services</div>
          <p className="text-gray-500 hsm">
            Leveraging my skills by building the company a great online
            presence. Collaborating with team members in bringing the company's
            dream projects to life.
          </p>
        </article>
        {/* <article id="experience_box" className="relative">
          <div className="sm:flex align-center space-x-2">
            <h1 className="hmd">Frontend Developer</h1>
            <p className="hidden sm:block">-</p>
            <span className="hmd font-bold text-gray-500">2021 - 2022</span>
          </div>
          <div className="hmd text-orange">XEFT</div>
          <p className="text-gray-500 hsm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae, nihil. Odio, eveniet. Autem, cum aut!
          </p>
        </article> */}
      </div>
    </div>
  );
};

export default Experience;
