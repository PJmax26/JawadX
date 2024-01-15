import Socials from "./Socials";
import Profile2 from "../../asserts/code-1-bg.png";

const About = ({ active }) => {
  return (
    <div className={`${active === "about" ? "block" : "hidden"}`}>
      <div className="flex-cols md:flex justify-between align-center mt-5">
        <div
          id="about_pic_box"
          className="w-full md:w-1/3 px-5 flex justify-center align-center"
        >
          <img id="about_pic" src={Profile2} />
        </div>
        <div className="w-full mt-5 md:m-0  md:w-2/3 p-5">
          <h1 className="hlg">My name is Nassam Mohammed Jawad</h1>
          <p className="my-5">
            I am a front-end developer with a strong interest in designing
            websites and building web applications that adds value to society. I
            have gained experience in creating web application designs through
            personal and group projects. Combining my technical skills with an
            eye for aesthetics, I build visually appealing websites that engage
            and inspire visitors.
          </p>
          <div className="mb-5 grid grid-cols-3 gap-3 w-full sm:w-2/3 lg:w-1/2">
            <div className="text-center p-3 rounded-xl">
              <h1 className="hxl">2+</h1>
              <p>Years of experience</p>
            </div>
            {/* <div className="text-center p-3 rounded-xl">
              <h1 className="hxl">10</h1>
              <p>Client Projects</p>
            </div>
            <div className="text-center p-3 rounded-xl">
              <h1 className="hxl">5</h1>
              <p>Partner Companies</p>
            </div> */}
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default About;
