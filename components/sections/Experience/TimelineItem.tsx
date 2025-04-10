import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface TimelineItemProps {
  position: string;
  company: string;
  duration: string;
  location: string;
  details: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  position,
  company,
  duration,
  location,
  details
}) => {
  return (
    <div className="relative pl-8 pb-8 group">
      <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
      <div className="absolute left-2 top-4 h-full w-0.5 bg-purple-900/50"></div>

      <div className="bg-[#1a1a35] p-6 rounded-lg shadow-md border border-purple-900/30 transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-purple-500/20">
        <h3 className="text-xl font-bold text-white mb-1">{position}</h3>
        <div className="text-purple-400">{company}</div>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCalendar} className="text-gray-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
            <span>{location}</span>
          </div>
        </div>
        <div className="mt-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="text-sm">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
