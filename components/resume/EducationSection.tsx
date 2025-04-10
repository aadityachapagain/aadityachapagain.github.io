import React from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-purple-400 mb-3">EDUCATION</h3>
      <div className="h-1 bg-purple-900/50 mb-4"></div>

      {education.map((edu, index) => (
        <div
          key={index}
          className={index !== education.length - 1 ? "mb-6" : ""}
        >
          <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
          <p className="text-purple-300 mt-1">{edu.institution}</p>
          <div className="flex flex-wrap justify-between text-gray-300 mt-2">
            <div className="flex items-center mr-4 mb-1">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-purple-400 mr-2"
              />
              {edu.period}
            </div>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-purple-400 mr-2"
              />
              {edu.location}
            </div>
          </div>
          {index !== education.length - 1 && (
            <div className="border-b border-purple-900/30 mt-3"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
