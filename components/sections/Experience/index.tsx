import React from "react";
import ZigzagTimeline from "./ZigZagTimeline";
import { getWorkExperience } from "../../../lib/ProfileData";

const Experience: React.FC = () => {
  const workExperience = getWorkExperience();

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-purple-400 mb-2">
            MY PROFESSIONAL JOURNEY
          </h2>
          <h3 className="text-5xl font-bold">Work Experience</h3>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <ZigzagTimeline items={workExperience} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
