import React from 'react';

interface HexagonSkillProps {
  icon: string;
  name: string;
}

const HexagonSkill: React.FC<HexagonSkillProps> = ({ icon, name }) => {
  return (
    <div className="hex-container group relative transition-all duration-300 hover:transform hover:scale-110">
      <div className="hex-shape bg-[#1a1a35] border border-purple-900/30 group-hover:bg-purple-900/40 group-hover:border-purple-500/50">
        <div className="hex-content flex items-center justify-center text-3xl text-purple-400 group-hover:text-white">
          {icon}
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 text-center whitespace-nowrap">
        <span className="text-xs text-gray-300">{name}</span>
      </div>
    </div>
  );
};

export default HexagonSkill;