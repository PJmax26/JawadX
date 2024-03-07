import Pic1 from "../../asserts/Einus.webp";
import Pic2 from "../../asserts/pic-2.jpg";
import { TbStarFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Testimonials = ({ active }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${
        active === "testimonial" ? "block" : "hidden"
      }`}
    >
      <div className="p-2 sm:p-5">
        <div className="flex justify-between mb-3">
          <div className="flex align-center space-x-2">
            <img id="tes_pic" src={Pic1} alt="" />
            <div>
              <h1 className="hlg">Abukari Einus</h1>
              <p className="text-gray-500">
                Fullstack Engineer, Firstline24 Health Technologies
              </p>
            </div>
          </div>
        </div>
        <p>
          A devoted frontend developer with a constant drive to grow and a
          passion for learning. He's quick to pick up new ideas, loves a
          fast-paced work atmosphere, and provides creative solutions with
          efficiency and zeal.
        </p>
        <div className="flex align-center space-x-4 mt-2">
          <li className="list-none transition_ease hover:text-orange">
            <a
              href="https://www.linkedin.com/in/abukari-einus-913721177/"
              className="hmd"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="list-none transition_ease hover:text-orange">
            <a
              href="https://twitter.com/BDante101"
              className=""
              target="_blank"
            >
              <BsTwitterX />
            </a>
          </li>
        </div>
      </div>

      {/* second reference */}
      {/* <div className="p-2 sm:p-5">
        <div className="flex justify-between mb-3">
          <div className="flex align-center space-x-2">
            <img id="tes_pic" src={Pic2} alt="" />
            <div>
              <h1 className="hlg">John Doe</h1>
              <p className="text-gray-500">
                Lead Robotics Software Engineer, 3Farmate
              </p>
            </div>
          </div>
        </div>
        <p>
          A devoted software engineer with a constant drive to grow and a
          passion for learning. He's quick to pick up new ideas, loves a
          fast-paced work atmosphere, and provides creative solutions with
          efficiency and zeal.
        </p>
        <div className="flex align-center space-x-4 mt-2">
          <li className="list-none transition_ease hover:text-orange">
            <a href="" className="hmd" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="list-none transition_ease hover:text-orange">
            <a href="" className="" target="_blank">
              <BsTwitterX />
            </a>
          </li>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonials;
