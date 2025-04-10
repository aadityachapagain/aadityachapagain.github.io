// Skills data service with types

export interface SkillCategory {
  name: string;
  category: string;
  icon: string;
}

export type SkillCategories = {
  [key: string]: SkillCategory[];
};

// Programming skills
const programmingSkills: SkillCategory[] = [
  { name: "Python", category: "programming", icon: "🐍" },
  { name: "JavaScript", category: "programming", icon: "JS" },
  { name: "TypeScript", category: "programming", icon: "TS" },
  { name: "C++", category: "programming", icon: "C++" },
  { name: "Java", category: "programming", icon: "☕" },
  { name: "Go", category: "programming", icon: "Go" },
  { name: "React", category: "programming", icon: "⚛️" },
  { name: "Next.js", category: "programming", icon: "N" },
  { name: "TensorFlow", category: "programming", icon: "🦾" },
  { name: "PyTorch", category: "programming", icon: "🔥" },
  { name: "Django", category: "programming", icon: "🎸" },
  { name: "FastAPI", category: "programming", icon: "⚡" }
];

// IT tools skills
const itToolsSkills: SkillCategory[] = [
  { name: "AWS", category: "itTools", icon: "☁️" },
  { name: "Docker", category: "itTools", icon: "🐳" },
  { name: "Kubernetes", category: "itTools", icon: "⚙️" },
  { name: "Linux", category: "itTools", icon: "🐧" },
  { name: "Git", category: "itTools", icon: "📊" },
  { name: "CI/CD", category: "itTools", icon: "🔄" },
  { name: "PowerShell", category: "itTools", icon: "🖥️" },
  { name: "Azure", category: "itTools", icon: "📦" },
  { name: "Cisco", category: "itTools", icon: "📞" },
  { name: "Terraform", category: "itTools", icon: "🏗️" }
];

// Database skills
const databaseSkills: SkillCategory[] = [
  { name: "MongoDB", category: "database", icon: "🍃" },
  { name: "PostgreSQL", category: "database", icon: "🐘" },
  { name: "MySQL", category: "database", icon: "🐬" },
  { name: "Redis", category: "database", icon: "🔴" },
  { name: "Elasticsearch", category: "database", icon: "🔍" },
  { name: "DynamoDB", category: "database", icon: "⚡" }
];

// Get skills by category
export const getSkillsByCategory = (): SkillCategories => {
  return {
    programming: programmingSkills,
    itTools: itToolsSkills,
    database: databaseSkills
  };
};

// Get all skills
export const getAllSkills = (): SkillCategory[] => {
  return [...programmingSkills, ...itToolsSkills, ...databaseSkills];
};

export default {
  getSkillsByCategory,
  getAllSkills
};
