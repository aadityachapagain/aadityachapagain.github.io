import React from 'react';

interface TextIconProps {
  text: string;
  className?: string;
  color?: string;
}

const ImprovedTextIcon: React.FC<TextIconProps> = ({ 
  text, 
  className = '',
  color = '#8960df'
}) => {
  return (
    <div 
      className={`text-icon ${className}`} 
      style={{ 
        color, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        fontSize: text.length > 2 ? '1.8rem' : '2.5rem', // Adjust size based on text length
      }}
    >
      {text}
    </div>
  );
};

// Color map for common technologies
export const getIconColorClass = (technology: string): string => {
  const techMap: Record<string, string> = {
    'python': 'icon-python',
    'java': 'icon-java',
    'javascript': 'icon-js',
    'js': 'icon-js',
    'typescript': 'icon-ts',
    'ts': 'icon-ts',
    'react': 'icon-react',
    'mongodb': 'icon-mongo',
    'mongo': 'icon-mongo',
    'c++': 'icon-cpp',
    'cpp': 'icon-cpp',
    'php': 'icon-php',
    'aws': 'icon-aws',
    'docker': 'icon-docker',
  };
  
  // Convert to lowercase for case-insensitive matching
  const techLower = technology.toLowerCase();
  return techMap[techLower] || '';
};

export default ImprovedTextIcon;