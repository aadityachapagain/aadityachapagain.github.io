import React, { useState } from 'react';
import { Certification } from '../../../lib/ProfileData';

interface CertificationCarouselProps {
  certifications: Certification[];
}

const CertificationCarousel: React.FC<CertificationCarouselProps> = ({ certifications }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % certifications.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? certifications.length - 1 : current - 1));
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="relative min-w-full px-4 transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-[#1a1a35] rounded-lg p-6 shadow-xl border border-purple-900/30 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{cert.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{cert.date}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {cert.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-purple-800 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
                    >
                      View Credential
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-900/50 hover:bg-purple-800 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
            aria-label="Previous certification"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-900/50 hover:bg-purple-800 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
            aria-label="Next certification"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        {certifications.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full mx-1 transition-colors ${
              index === activeIndex ? 'bg-purple-500' : 'bg-gray-500'
            }`}
            aria-label={`Go to certification ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationCarousel;