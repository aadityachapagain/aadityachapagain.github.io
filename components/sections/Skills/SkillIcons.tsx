import React from 'react';
import Image from 'next/image';

// React icon component
export const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="80" height="80">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

// Python icon component
export const PythonIcon = () => (
  <div style={{ width: '80px', height: '80px', position: 'relative' }}>
    <Image
      src="/icons/python.svg"
      alt="Python"
      width={80}
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

// Java icon component
export const JavaIcon = () => (
  <div style={{ width: '80px', height: '80px', position: 'relative' }}>
    <Image
      src="/icons/java.svg"
      alt="Java"
      width={80}
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

// JavaScript icon component
export const JavaScriptIcon = () => (
  <div className="flex items-center justify-center" style={{ width: '80px', height: '80px', backgroundColor: '#F7DF1E', position: 'relative' }}>
    <span style={{ fontSize: '36px', fontWeight: 'bold', color: 'black' }}>JS</span>
  </div>
);

// TypeScript icon component
export const TypeScriptIcon = () => (
  <div className="flex items-center justify-center" style={{ width: '80px', height: '80px', backgroundColor: '#007ACC', position: 'relative' }}>
    <span style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>TS</span>
  </div>
);

// Docker icon component
export const DockerIcon = () => (
  <div style={{ width: '80px', height: '80px', position: 'relative' }}>
    <Image
      src="/icons/docker.svg"
      alt="Docker"
      width={80}
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

// Tailwind icon component
export const TailwindIcon = () => (
  <div style={{ width: '80px', height: '80px', position: 'relative' }}>
    <Image
      src="/icons/tailwind.svg"
      alt="Tailwind"
      width={80}
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

// MongoDB icon component
export const MongoDBIcon = () => (
  <div style={{ width: '80px', height: '80px', position: 'relative' }}>
    <Image
      src="/icons/mongodb.svg"
      alt="MongoDB"
      width={80}
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

// C++ icon component
export const CppIcon = () => (
  <div style={{ width: '80px', height: '80px', position: 'relative' }}>
    <Image
      src="/icons/cpp.svg"
      alt="C++"
      width={80}
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

// Fallback icon (text-based)
export const TextIcon = ({ text, className = '' }: { text: string; className?: string }) => (
  <div className={`text-icon ${className}`}>
    {text}
  </div>
);