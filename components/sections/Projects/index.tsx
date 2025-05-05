import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import { getPersonalProjects } from "../../../lib/ProfileData";

const PersonalProjects: React.FC = () => {
  const projects = getPersonalProjects();

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#121225] to-[#1a1a35]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full mb-3">
            MY WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Personal Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore a collection of my recent projects showcasing my skills in
            software development, machine learning, and data science. Each
            project represents my passion for building innovative solutions to
            real-world problems.
          </p>
        </div>

        <ProjectCarousel projects={projects} />

        <div className="mt-16 text-center">
          <a
            href="https://projects.aadityachapagain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-700 hover:bg-purple-600 text-white py-3 px-6 rounded-md transition-colors shadow-lg hover:shadow-purple-700/20"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
