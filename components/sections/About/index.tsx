import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold">
                {" Hi , I'm "} <span className="text-purple-400">Aaditya</span> 👋
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300">
                {"I'm a"} <span className="text-purple-400">Machine Learning Engineer</span>
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg">
              Welcome to my portfolio! I specialize in Natural Language Processing with {new Date().getFullYear() - 2019} years of experience turning ideas into production-grade solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center font-medium"
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <Link
                href="/resume" 
                className="border border-purple-600 text-purple-400 hover:bg-purple-900/30 py-3 px-6 rounded-lg transition-colors flex items-center font-medium"
              >
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/aadityachapagain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1a1a35] hover:bg-purple-900/30 text-white p-3 rounded-full transition-colors"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aadityachapagain/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1a1a35] hover:bg-purple-900/30 text-white p-3 rounded-full transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
              <a 
                href="mailto:connect@aadityachapagain.com" 
                className="bg-[#1a1a35] hover:bg-purple-900/30 text-white p-3 rounded-full transition-colors"
                aria-label="Email Me"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full relative z-10 overflow-hidden border-4 border-purple-600 shadow-xl shadow-purple-900/30">
                <Image
                  src="/Profile.png"
                  alt="Aaditya Chapagain"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 animate-pulse bg-purple-600 blur-3xl opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;