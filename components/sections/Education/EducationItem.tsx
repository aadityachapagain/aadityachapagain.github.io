import React from "react";

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period?: string;
  details: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  location,
  period,
  details
}) => {
  return (
    <div className="bg-[#1a1a35] rounded-lg p-6 shadow-xl border border-purple-900/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 max-w-md mx-auto lg:mx-0">
      <h3 className="text-xl font-bold text-white mb-1">{degree}</h3>
      <p className="text-purple-400 mb-2">{institution}</p>

      <div className="flex flex-col mb-4 text-sm">
        {location && <span className="text-gray-400">{location}</span>}
        {period && <span className="text-gray-400">{period}</span>}
      </div>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {details.map((detail, idx) => (
          <li key={idx} className="text-sm">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationItem;
