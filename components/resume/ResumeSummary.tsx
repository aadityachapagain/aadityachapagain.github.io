import React from "react";
import distanceToNow from "../../lib/dateRelative";

const ResumeSummary: React.FC = () => {
  return (
    <div className="mb-8">
      <p className="text-gray-300 leading-relaxed">
        Machine Learning Engineer skilled in Natural Language Processing with{" "}
        {distanceToNow(new Date("2019-04-01 12:00"), false)} of experience of
        prototyping Intelligent machine learning platform and transforming any
        startup ideas into production grade solutions.
      </p>
      <p className="text-gray-300 leading-relaxed mt-2">
        Analytical, client-focused, detail-oriented, problem-solving
        professional with strong technical skills and the ability to grasp the
        concept very quickly.
      </p>
    </div>
  );
};

export default ResumeSummary;
