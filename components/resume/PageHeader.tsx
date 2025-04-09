import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 print-hidden">
      <h2 className="text-2xl text-purple-400 mb-2">{subtitle}</h2>
      <h1 className="text-5xl font-bold">{title}</h1>
    </div>
  );
};

export default PageHeader;