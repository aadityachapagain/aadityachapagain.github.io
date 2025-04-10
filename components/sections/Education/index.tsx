import React from "react";
import ZigzagTimeline from "../Experience/ZigZagTimeline"; // Reusing the same component
import { getEducation } from "../../../lib/ProfileData";

const Education: React.FC = () => {
  // Convert education data to match the timeline format
  const educationItems = getEducation().map(edu => ({
    position: edu.degree,
    company: edu.institution,
    duration: edu.duration,
    location: edu.location,
    details: edu.details
  }));

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-purple-400 mb-2">
            WHAT I HAVE STUDIED SO FAR
          </h2>
          <h3 className="text-5xl font-bold">Education.</h3>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <ZigzagTimeline items={educationItems} />
        </div>
      </div>
    </section>
  );
};

export default Education;
