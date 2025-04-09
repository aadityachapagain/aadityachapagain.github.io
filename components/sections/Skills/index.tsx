import React from 'react';
import ExactSkillsGrid from './ExactSkillsGrid';
import ImprovedTextIcon, { getIconColorClass } from './ImprovedTextIcons';

// Define skill item interface
interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  // Create a helper to generate text-based skill icons
  const createTextIcon = (name: string, text: string = ''): SkillItem => {
    const displayText = text || name.substring(0, 2);
    return {
      name,
      icon: <ImprovedTextIcon text={displayText} className={getIconColorClass(name)} />
    };
  };
  
  // Programming skills organized in rows for hexagon grid
  const programmingSkills = [
    // First row - 6 hexagons
    [
      createTextIcon('Python', 'Py'),
      createTextIcon('Java'),
      createTextIcon('C++'),
      createTextIcon('JavaScript', 'JS'),
      createTextIcon('TypeScript', 'TS'),
      createTextIcon('Docker')
    ],
    // Second row - 5 hexagons (offset)
    [
      createTextIcon('Tailwind', 'TW'),
      createTextIcon('React'),
      createTextIcon('PHP'),
      createTextIcon('MongoDB', 'DB'),
      createTextIcon('GraphQL', 'GQL')
    ]
  ];
  
  // IT Tools
  const itToolsSkills = [
    // First row
    [
      createTextIcon('AWS'),
      createTextIcon('Linux', 'LX'),
      createTextIcon('Azure', 'AZ'),
      createTextIcon('PowerShell', 'PS')
    ],
    // Second row (offset)
    [
      createTextIcon('DevOps', 'DO'),
      createTextIcon('Docker', 'DK'),
      createTextIcon('Kubernetes', 'K8s')
    ]
  ];
  
  // Database skills
  const databaseSkills = [
    // Single row
    [
      createTextIcon('MongoDB', 'MDB'),
      createTextIcon('PostgreSQL', 'PG'),
      createTextIcon('MySQL', 'SQL'),
      createTextIcon('Redis', 'RD')
    ]
  ];
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-purple-400 mb-2">TECHNICAL PROFICIENCIES</h2>
          <h3 className="text-5xl font-bold">Skills.</h3>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Programming Skills */}
          <div className="mb-20">
            <h4 className="text-2xl text-purple-300 mb-12">&lt;programming&gt;</h4>
            <ExactSkillsGrid skills={programmingSkills} />
            <h4 className="text-2xl text-purple-300 mt-16 text-right">&lt;/programming&gt;</h4>
          </div>
          
          {/* IT Tools */}
          <div className="mb-20">
            <h4 className="text-2xl text-purple-300 mb-12">&lt;itTools&gt;</h4>
            <ExactSkillsGrid skills={itToolsSkills} />
            <h4 className="text-2xl text-purple-300 mt-16 text-right">&lt;/itTools&gt;</h4>
          </div>
          
          {/* Database Skills */}
          <div>
            <h4 className="text-2xl text-purple-300 mb-12">&lt;database&gt;</h4>
            <ExactSkillsGrid skills={databaseSkills} />
            <h4 className="text-2xl text-purple-300 mt-16 text-right">&lt;/database&gt;</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;