import Socials from "./Socials";
// import Profile2 from "../../../asserts/images/code-1-bg.png";
import Profile2 from "../../../asserts/images/profile.png";
import { Link } from "react-router-dom";

const About = ({ active }) => {
  return (
    <div className={`${active === "about" ? "block" : "hidden"}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 align-center mt-5">
        <div
          id="about_pic_box"
          className="profile_pic sm:h-auto h-[15rem] place-middle md:justify-end"
        >
          <img id="about_pic" src={Profile2} />
        </div>
        <div>
          <h1 className="text-[1.5rem] lg:text-[2.5rem] font-[700] sm:mt-0 mt-20">
            Hi 👋, I'm Nassam Mohammed Jawad
          </h1>
          <p className="my-3 text-[1.2rem]">
            A tech enthusiast from Ghana with a strong interest in building web
            applications. I have gained{" "}
            <span className="text-orange">3 years</span> of experience in
            creating user friendly{" "}
            <span className="text-orange">web applications</span> that scale,
            through personal and group projects. Combining my technical skills
            with an eye for aesthetics, I build visually appealing websites that
            engage and inspire visitors.
          </p>
          <Socials />
          {/* <Link
            to="/my_bio"
            className="border-2 w-fit my-4 border-grey hover:border-white transition_ease py-3 px-5 rounded-xl flex align-center space-x-2"
          >
            <FaPaperPlane />
            <span>Learn More About Me</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default About;
