import Profile from "../asserts/profile-bg.png";
import { FaPaperPlane } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const Hero = () => (
  <section
    id="home"
    className="bg-indigo_dark grid grid-cols-1 sm:grid-cols-2 mt-10 sm:mt-25"
  >
    <div className="">
      <img src={Profile} className="hidden sm:block" />
    </div>
    <div className="flex align-center">
      <div>
        <h1 className="hxl">DoriCodes</h1>
        <h1 className="mb-3 hlg">
          <span className="text-orange">24/7</span> Frontend{" "}
          <span className="text-orange">Developer</span>
        </h1>
        <p className="mb-7">
          Skilled in crafting beautiful and responsive user experience for your
          online presence. My skills and eye for aesthetics not only brings your
          web projects to life, but also leaves an evelasting great user
          experience for you and your customers.
        </p>

        <div className="flex space-x-5 mt-5">
          <a
            href="mailto:jawadnassam264@gmail.com"
            className="border-2 border-grey hover:border-dark transition_ease py-3 px-5 rounded-xl flex align-center space-x-2"
          >
            <FaPaperPlane />
            <span>Email Me</span>
          </a>
          <button className="border-2 border-grey hover:border-dark transition_ease py-3 px-5 rounded-xl flex align-center space-x-2">
            <FaDownload />
            <span>Get CV</span>
          </button>
        </div>
      </div>
    </div>

    <div className="flex align-center justify-center sm:hidden">
      <img id="profile_pic" src={Profile} />
    </div>
  </section>
);

export default Hero;
