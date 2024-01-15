import { useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Testimonials from "./Testimonials";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const Resume = () => {
  const [active, setActive] = useState("about");
  return (
    <section id="resume">
      <h3 className="text-center">
        My <span className="text-orange">Resume</span>
      </h3>

      <div className="navigators w-full justify-between sm:w-fit mx-auto my-5 flex space-x-1 sm:space-x-5">
        <div
          onClick={() => setActive("about")}
          className={`border-2 border-grey rounded-xl shadow-lg nav_box cursor-pointer ${
            active === "about" ? "bg-orange border-0" : ""
          }`}
        >
          <FaUser />
          About Me
        </div>
        <div
          onClick={() => setActive("experience")}
          className={`border-2 border-grey rounded-xl shadow-lg nav_box cursor-pointer ${
            active === "experience" ? "bg-orange border-0" : ""
          }`}
        >
          <FaUserTie />
          Experience
        </div>
        <div
          onClick={() => setActive("education")}
          className={`border-2 border-grey rounded-xl shadow-lg nav_box cursor-pointer ${
            active === "education" ? "bg-orange border-0" : ""
          }`}
        >
          <FaUserGraduate />
          Education
        </div>
        <div
          onClick={() => setActive("testimonial")}
          className={`border-2 border-grey rounded-xl shadow-lg nav_box cursor-pointer ${
            active === "testimonial" ? "bg-orange border-0" : ""
          }`}
        >
          <FaUserGroup />
          Reference
        </div>
      </div>

      {/* content area */}
      <div className="mt-10">
        <About active={active} />
        <Experience active={active} />
        <Education active={active} />
        <Testimonials active={active} />
      </div>
    </section>
  );
};

export default Resume;
