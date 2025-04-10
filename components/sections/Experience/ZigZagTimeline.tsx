import React from "react";

interface TimelineItemProps {
  position: string;
  company: string;
  duration: string;
  location: string;
  details: string[];
  isLeft: boolean;
}

const ZigzagTimelineItem: React.FC<TimelineItemProps> = ({
  position,
  company,
  duration,
  location,
  details,
  isLeft
}) => {
  return (
    <div className="relative mb-16 last:mb-0">
      {/* Timeline circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-5 bg-purple-600 rounded-full"></div>
      </div>

      {/* Content */}
      <div
        className={`flex ${
          isLeft ? "flex-row" : "flex-row-reverse"
        } items-center`}
      >
        {/* Date indicator - appears on opposite side of content */}
        <div
          className={`w-1/2 ${isLeft ? "pr-10 text-right" : "pl-10 text-left"}`}
        >
          <div className="text-purple-400 font-medium">{duration}</div>
        </div>

        {/* Timeline content - alternates left/right */}
        <div className="w-1/2">
          <div
            className={`bg-[#1a1a35] p-6 rounded-lg shadow-md border border-purple-900/30 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 ${
              isLeft ? "ml-10" : "mr-10"
            } max-w-sm`}
          >
            <h3 className="text-xl font-bold text-white mb-1">{position}</h3>
            <div className="text-purple-400 mb-2">{company}</div>
            <div className="text-gray-400 mb-3">{location}</div>
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
    </div>
  );
};

interface ZigzagTimelineProps {
  items: Array<{
    position: string;
    company: string;
    duration: string;
    location: string;
    details: string[];
  }>;
}

const ZigzagTimeline: React.FC<ZigzagTimelineProps> = ({ items }) => {
  return (
    <div className="relative py-8">
      {/* Timeline vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-purple-900/50"></div>

      {/* Timeline items */}
      {items.map((item, index) => (
        <ZigzagTimelineItem
          key={index}
          position={item.position}
          company={item.company}
          duration={item.duration}
          location={item.location}
          details={item.details}
          isLeft={index % 2 === 0} // Alternate left/right
        />
      ))}
    </div>
  );
};

export default ZigzagTimeline;
