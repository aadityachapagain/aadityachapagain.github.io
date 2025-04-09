import React from 'react';

export interface SkillCategory {
  category: string;
  skills: string;
}

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-purple-400 mb-3">SKILLS</h3>
      <div className="h-1 bg-purple-900/50 mb-4"></div>
      
      <ul className="space-y-3 text-gray-300">
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="font-semibold text-white">{skill.category}:</span> {skill.skills}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;