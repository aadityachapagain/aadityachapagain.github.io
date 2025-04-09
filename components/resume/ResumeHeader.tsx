import React from 'react';
import { faEnvelope, faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewTabLink from "../newtabLink";

const ResumeHeader: React.FC = () => {
  return (
    <div className="border-b border-purple-900/50 pb-6 mb-6">
      <h2 className="text-3xl font-bold text-white tracking-wide">
        AADITYA CHAPAGAIN
      </h2>
      <h3 className="text-xl text-purple-400 mt-1">
        Machine Learning Engineer | Full Stack Developer
      </h3>
      <p className="text-gray-300 mt-1">
        Computer Science Student @ University of Wollongong
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        <div className="flex items-center text-gray-300">
          <FontAwesomeIcon icon={faLocationDot} className="text-purple-400 mr-3" />
          Wollongong, NSW, 2500
        </div>
        <NewTabLink
          className="flex items-center text-gray-300 hover:text-purple-400 transition duration-300"
          href={"mailto:connect@aadityachapagain.com"}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-purple-400 mr-3" />
          connect@aadityachapagain.com
        </NewTabLink>
        <NewTabLink
          href={"https://aadityachapagain.com"}
          className="flex items-center text-gray-300 hover:text-purple-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faGlobe} className="text-purple-400 mr-3" />
          www.aadityachapagain.com
        </NewTabLink>
        <NewTabLink
          href="https://www.linkedin.com/in/aadityachapagain/"
          className="flex items-center text-gray-300 hover:text-purple-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-purple-400 mr-3" />
          linkedin.com/in/aadityachapagain
        </NewTabLink>
        <NewTabLink
          href="https://github.com/aadityachapagain/"
          className="flex items-center text-gray-300 hover:text-purple-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="text-purple-400 mr-3" />
          aadityachapagain
        </NewTabLink>
      </div>
    </div>
  );
};

export default ResumeHeader;