import React from 'react';

interface SkillItem {
  name: string;
  icon: React.ReactNode; // Can be a component, image, or text
}

interface ExactSkillsGridProps {
  skills: SkillItem[][];
}

const ExactSkillsGrid: React.FC<ExactSkillsGridProps> = ({ skills }) => {
  return (
    <div className="hexagon-grid">
      {skills.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="hexagon-row">
          {row.map((skill, skillIndex) => (
            <div key={`skill-${rowIndex}-${skillIndex}`} className="hexagon">
              <div className="hexagon-content">
                {skill.icon}
              </div>
              <div className="hexagon-label">{skill.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExactSkillsGrid;