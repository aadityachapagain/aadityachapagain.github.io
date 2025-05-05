import React, { useState, useEffect } from "react";
import { PersonalProject } from "../../../lib/ProfileData";

interface ProjectCarouselProps {
  projects: PersonalProject[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(current => (current + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(current =>
      current === 0 ? projects.length - 1 : current - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Main carousel */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="relative min-w-full px-4">
                <div className="bg-gradient-to-br from-[#1a1a35] to-[#2d2d5b] rounded-xl p-6 shadow-2xl border border-purple-600/30 h-full overflow-hidden group">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Project image */}
                    <div className="w-full md:w-2/5 overflow-hidden rounded-lg">
                      <div
                        className="h-64 md:h-full bg-purple-900/20 rounded-lg flex items-center justify-center overflow-hidden transform transition-all duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: project.image
                            ? `url(${project.image})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      >
                        {!project.image && (
                          <div className="text-6xl opacity-30">
                            {project.title.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project details */}
                    <div className="w-full md:w-3/5">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="mb-4">
                        <h4 className="text-sm uppercase text-purple-400 font-semibold mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-900/40 text-purple-200 text-sm rounded-full border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-sm uppercase text-purple-400 font-semibold mb-2">
                          {"Highlights"}
                        </h4>
                        <ul className="space-y-1 text-gray-300">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-colors"
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.234-3.22-.123-.303-.534-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.804c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.824 1.102.824 2.222 0 1.604-.015 2.897-.015 3.292 0 .32.216.694.825.577C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"
                              />
                            </svg>
                            GitHub
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-transparent hover:bg-purple-800/50 text-purple-300 border border-purple-500 py-2 px-4 rounded-md transition-colors"
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-900/70 hover:bg-purple-800 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 backdrop-blur-sm shadow-lg transition-all hover:scale-110"
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-900/70 hover:bg-purple-800 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 backdrop-blur-sm shadow-lg transition-all hover:scale-110"
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1.5 transition-all ${
              index === activeIndex
                ? "bg-purple-500 scale-125"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
