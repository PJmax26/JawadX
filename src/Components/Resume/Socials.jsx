import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-4 w-fit">
      <li className="w-10 h-10 bg-grey list-none flex justify-center align-center rounded-full transition_ease hover:bg-orange">
        <a
          href="https://twitter.com/Nassam_Jawad"
          className="w-full h-full flex justify-center align-center"
          target="_blank"
        >
          <BsTwitterX />
        </a>
      </li>
      <li className="w-10 h-10 bg-grey list-none flex justify-center align-center rounded-full transition_ease hover:bg-orange">
        <a
          href="https://www.facebook.com/code.pj.7"
          className="w-full h-full flex justify-center align-center"
          target="_blank"
        >
          <FaFacebookF />
        </a>
      </li>
      <li className="w-10 h-10 bg-grey list-none flex justify-center align-center rounded-full transition_ease hover:bg-orange">
        <a
          href="https://www.linkedin.com/in/nassam-mohammed-jawad-777b2b230/"
          className="w-full h-full flex justify-center align-center"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="w-10 h-10 bg-grey list-none flex justify-center align-center rounded-full transition_ease hover:bg-orange">
        <a
          href="https://github.com/PJmax26"
          className="w-full h-full flex justify-center align-center"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>
    </div>
  );
};

export default Socials;
