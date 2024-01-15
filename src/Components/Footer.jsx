import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <h3 className="text-center">
        <span className="text-orange">Contact</span> Me
      </h3>
      <h1 className="hlg text-center">Lets Get In Touch</h1>

      <section className="py-5 align- grid grid-cols-1 sm:grid-cols-3">
        <div className="flex justify-center align-center space-x-3">
          <BsTwitterX className="hlg text-orange" />
          <div>
            <h1 className="hmd">X/Twitter</h1>
            <p className="text-gray-500">@Nassam_Jawad</p>
          </div>
        </div>
        <div className="flex my-5 sm:m-0 justify-center align-center space-x-3">
          <MdEmail className="hxl text-orange" />
          <div>
            <h1 className="hmd">Email</h1>
            <p className="text-gray-500">jawadnassam26@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center align-center space-x-3">
          <FaLocationDot className="hxl text-orange" />
          <div>
            <h1 className="hmd">Location</h1>
            <p className="text-gray-500">Tamale, GH</p>
          </div>
        </div>
      </section>

      <section className="mt-5 bg-indigo_dark">
        <div className="flex justify-between align-center w-full sm:w-2/3 mx-auto">
          <div>
            <h1 className="hxl">DoriCodes</h1>
            <p>Frontend Developer</p>
          </div>

          <div className="flex space-x-4 w-fit">
            <li className="list-none transition_ease hover:text-orange">
              <a
                href="https://www.facebook.com/code.pj.7"
                className="hlg"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="list-none transition_ease hover:text-orange">
              <a
                href="https://www.linkedin.com/in/nassam-mohammed-jawad-777b2b230/"
                className="hlg"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="list-none transition_ease hover:text-orange">
              <a
                href="https://github.com/PJmax26"
                className="hlg"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
          </div>
        </div>

        <p className="text-center mt-10">
          &copy; Jawad<span className="text-orange">X</span>. All rights
          reserved
        </p>
      </section>
    </div>
  );
};

export default Footer;
