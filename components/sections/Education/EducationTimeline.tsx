import React from "react";

interface TimelineNodeProps {
  year: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({
  year,
  icon,
  isActive = false
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute text-gray-400 right-full mr-8 text-sm font-medium whitespace-nowrap">
        {year}
      </div>
      <div
        className={`z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
          isActive
            ? "border-purple-500 bg-purple-900/40"
            : "border-gray-700 bg-[#1a1a35]"
        } transition duration-300 ease-in-out`}
      >
        {icon}
      </div>
    </div>
  );
};

interface EducationTimelineProps {
  children: React.ReactNode;
  nodes: {
    year: string;
    icon: React.ReactNode;
    isActive?: boolean;
  }[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({
  children,
  nodes
}) => {
  return (
    <div className="relative w-full py-8">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-900/20"></div>

      <div className="relative">
        {nodes.map((node, index) => (
          <div key={index} className="relative mb-24 last:mb-0">
            <TimelineNode
              year={node.year}
              icon={node.icon}
              isActive={node.isActive}
            />
            <div
              className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-full ${
                index % 2 === 0
                  ? "lg:translate-x-0 lg:left-1/2 lg:pr-6"
                  : "lg:-translate-x-full lg:left-1/2 lg:pl-6"
              }`}
            >
              {Array.isArray(children) ? children[index] : children}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
