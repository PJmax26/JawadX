import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState("home");
  const [nav, setNav] = useState("close");

  const hundleNav = () => {
    nav === "close" ? setNav("open") : setNav("close");
  };

  return (
    <header
      id="hero"
      className="fixed top-0 left-0 py-5 md:py-0 w-full flex justify-between align-center bg-dark z-20"
    >
      <div className="logo">
        Jawad<span className="text-orange">X</span>
      </div>
      <nav className="hidden md:flex space-x-3">
        <li
          onClick={() => setActive("home")}
          className={`list-none flex justify-center ${
            active === "home" ? "active" : ""
          }`}
        >
          <a href="#home">Home</a>
        </li>
        <li
          onClick={() => setActive("resume")}
          className={`list-none flex justify-center ${
            active === "resume" ? "active" : ""
          }`}
        >
          <a href="#resume">Resume</a>
        </li>
        <li
          onClick={() => setActive("Service")}
          className={`list-none flex justify-center ${
            active === "Service" ? "active" : ""
          }`}
        >
          <a href="#service">Service</a>
        </li>
        <li
          onClick={() => setActive("work")}
          className={`list-none flex justify-center ${
            active === "work" ? "active" : ""
          }`}
        >
          <a href="#work">Work</a>
        </li>
        <li
          onClick={() => setActive("contact")}
          className={`list-none flex justify-center ${
            active === "contact" ? "active" : ""
          }`}
        >
          <a href="#contact">Contact</a>
        </li>
      </nav>
      <a
        href="mailto:jawadnassam264@gmail.com"
        className="md:block hidden btn bg-orange rounded-sm"
      >
        Hire Me
      </a>
      <button
        onClick={() => hundleNav()}
        className="block md:hidden btn bg-orange rounded-full"
      >
        &#9776;
      </button>

      <nav
        id="mobile_nav"
        className={`flex-col md:hidden bg-orange p-5 fixed top-0 w-3/4 h-1/3 transition_ease rounded-r-full ${
          nav === "close" ? "" : "active"
        }`}
      >
        <li className="list-none hover:bg-dark h-10">
          <a href="#home">Home</a>
        </li>
        <li className="list-none hover:bg-dark h-10">
          <a href="#resume">Resume</a>
        </li>
        <li className="list-none hover:bg-dark h-10">
          <a href="#service">Service</a>
        </li>
        <li className="list-none hover:bg-dark h-10">
          <a href="#work">Work</a>
        </li>
        <li className="list-none hover:bg-dark h-10">
          <a href="#contact">Contact</a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
