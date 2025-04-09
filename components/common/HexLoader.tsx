import React from 'react';

interface HexLoaderProps {
  size?: number;
  color?: string;
  text?: string;
}

/**
 * Hexagon-themed loading component that matches the site's design
 */
const HexLoader: React.FC<HexLoaderProps> = ({
//   size = 100,
//   color = '#8960df',
  text = 'Processing ...'
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="fancy-spinner mb-4">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="dot"></div>
      </div>
      
      {text && (
        <div className="mt-4 text-center">
          <p className="text-purple-400 text-sm font-medium">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

/**
 * Full-screen loader with hexagon theme
 */
export const FullscreenHexLoader: React.FC<{ message?: string }> = ({ message = "Processing ..." }) => {
  return (
    <div className="fixed inset-0 bg-[#070717] flex flex-col items-center justify-center z-50">
      <div className="relative">
        <div className="hex-loader"></div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Logo or Text */}
      <div className="mt-8 text-center">
        <h1 className="text-xl font-bold text-white">
          <span className="text-white font-mono">/</span>
          <span className="text-purple-400">Aaditya</span>
          <span className="text-white font-mono">.</span>
        </h1>
        <p className="mt-2 text-purple-300 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default HexLoader;