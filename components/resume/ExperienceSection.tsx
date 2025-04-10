import React from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-purple-400 mb-3">EXPERIENCE</h3>
      <div className="h-1 bg-purple-900/50 mb-4"></div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className={index !== experiences.length - 1 ? "mb-6" : ""}
        >
          <h4 className="text-xl font-semibold text-white">
            {exp.position} - {exp.company}
          </h4>
          <div className="flex flex-wrap justify-between text-gray-300 mt-1">
            <div className="flex items-center mr-4 mb-1">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-purple-400 mr-2"
              />
              {exp.period}
            </div>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-purple-400 mr-2"
              />
              {exp.location}
            </div>
          </div>
          {index !== experiences.length - 1 && (
            <div className="border-b border-purple-900/30 mt-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
