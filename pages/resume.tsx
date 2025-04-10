import React, { useRef } from "react";
import Head from "next/head";
import { useReactToPrint } from "react-to-print";

// Components
import PageHeader from "../components/resume/PageHeader";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSummary from "../components/resume/ResumeSummary";
import ExperienceSection from "../components/resume/ExperienceSection";
import SkillsSection from "../components/resume/SkillsSection";
import EducationSection from "../components/resume/EducationSection";
import CertificationSection from "../components/resume/CertificationSection";
import PrintableResume from "../components/resume/PrintableResume";

// Data
import {
  experienceData,
  skillsData,
  educationData,
  certificationData
} from "../data/resumeData";

const ResumePage: React.FC = () => {
  const printContentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printContentRef.current
  });

  return (
    <div className="bg-[#070717] text-white min-h-screen w-full">
      <Head>
        <title>Resume | Aaditya Chapagain</title>
        <meta
          name="description"
          content="Professional resume of Aaditya Chapagain, Machine Learning Engineer and Full Stack Developer."
        />
        <style>
          {`
            @media print {
              body {
                background-color: white !important;
                color: black !important;
              }
              
              .print-hidden {
                display: none !important;
              }
              
              .print-content {
                display: block !important;
                background-color: white !important;
                color: black !important;
              }
            }
          `}
        </style>
      </Head>

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Page Header */}
        <PageHeader title="Resume" subtitle="MY QUALIFICATIONS" />

        {/* Print Button */}
        <div className="max-w-5xl mx-auto mb-10 flex justify-between items-center print-hidden">
          <button
            onClick={handlePrint}
            className="bg-transparent hover:bg-purple-600 text-purple-500 font-semibold hover:text-white py-2 px-6 border border-purple-500 hover:border-transparent rounded transition duration-300"
          >
            Print My Resume
          </button>
        </div>

        {/* Screen View (Dark Theme) */}
        <div className="print-hidden">
          <div className="max-w-5xl mx-auto bg-[#1a1a35] p-8 rounded-lg shadow-md border border-purple-900/30">
            {/* Header Section */}
            <ResumeHeader />

            {/* Summary Section */}
            <ResumeSummary />

            {/* Two column layout for content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Column */}
              <div>
                <ExperienceSection experiences={experienceData} />
                <SkillsSection skills={skillsData} />
              </div>

              {/* Right Column */}
              <div>
                <EducationSection education={educationData} />
                <CertificationSection certifications={certificationData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Printable Version (White Background) */}
      <PrintableResume
        ref={printContentRef}
        experiences={experienceData}
        skills={skillsData}
        education={educationData}
        certifications={certificationData}
      />
    </div>
  );
};

export default ResumePage;
