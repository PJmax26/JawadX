const Education = ({ active }) => {
  return (
    <div className={` ${active === "education" ? "block" : "hidden"}`}>
      <div className="w-full sm:w-2/3 md:w-1/2 space-y-5 mx-auto border-l-2 border-grey pl-5 py-5">
        <article id="education_box" className="relative">
          <div className="sm:flex align-center space-x-2">
            <h1 className="hmd">BSc Computer Science</h1>
            <p className="hidden sm:block">-</p>
            <span className="hmd font-bold text-gray-500">
              Jan, 2023 - Present
            </span>
          </div>
          <div className="hmd text-orange">UNER</div>
          <p className="text-gray-500 hsm">
            Building a solid foundation in Computer Science, Programming and
            Software development
          </p>
        </article>
        <article id="experience_box" className="relative">
          <div className="sm:flex align-center space-x-2">
            <h1 className="hmd">General Science</h1>
            <p className="hidden sm:block">-</p>
            <span className="hmd font-bold text-gray-500">
              Sep, 2019 - Oct, 2022
            </span>
          </div>
          <div className="hmd text-orange">Tamale High School</div>
          <p className="text-gray-500 hsm">
            Gained knowledge and experience in general science principles
          </p>
        </article>
      </div>
    </div>
  );
};

export default Education;
