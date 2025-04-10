import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a20] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">
              <span className="text-white font-mono">/</span>
              <span className="text-purple-400">Aaditya</span>
              <span className="text-white font-mono">.</span>
            </span>
            <p className="text-gray-400 mt-2">
              Machine Learning Engineer & Full Stack Developer
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/aadityachapagain"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a35] hover:bg-purple-900/30 text-white p-3 rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aadityachapagain/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a35] hover:bg-purple-900/30 text-white p-3 rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
            </a>
            <a
              href="mailto:connect@aadityachapagain.com"
              className="bg-[#1a1a35] hover:bg-purple-900/30 text-white p-3 rounded-full transition-colors"
              aria-label="Email Me"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Aaditya Chapagain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
