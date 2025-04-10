import React, { forwardRef } from "react";
import {
  faEnvelope,
  faGlobe,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import distanceToNow from "../../lib/dateRelative";
import NewTabLink from "../newtabLink";
import { Experience } from "./ExperienceSection";
import { SkillCategory } from "./SkillsSection";
import { Education } from "./EducationSection";
import { Certification } from "./CertificationSection";

interface PrintableResumeProps {
  experiences: Experience[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
}

const PrintableResume = forwardRef<HTMLDivElement, PrintableResumeProps>(
  ({ experiences, skills, education, certifications }, ref) => {
    return (
      <div className="hidden print-content" ref={ref}>
        {/* Add print-specific styles */}
        <style type="text/css" media="print">
          {`
            @page {
              size: A4;
              margin: 0.8cm 1cm 0.8cm 1cm; /* Slightly tighter top/bottom margins */
            }
            
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              font-size: 10pt; /* Base font size for better space usage */
            }
            
            .no-break-inside {
              page-break-inside: avoid;
            }

            /* Force single page */
            .print-container {
              max-height: 10.5in; /* A4 height minus margins */
              overflow: hidden;
            }
          `}
        </style>

        <div className="print-container py-4 max-w-5xl m-auto px-6 font-serif">
          {/* Header - Compact Version */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-xl font-bold text-slate-700 tracking-wide">
                AADITYA CHAPAGAIN
              </div>
              <div className="text-sm">
                Machine Learning Engineer | Full Stack Developer
              </div>
              <div className="text-sm mb-1">
                Computer Science Student @ University of Wollongong
              </div>
            </div>
            <div className="text-right text-xs">
              <div className="flex items-center justify-end gap-1 mb-1">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ fontSize: 12 }}
                />
                <span>Wollongong, NSW, 2500</span>
              </div>
              <div className="flex items-center justify-end gap-1 mb-1">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 12 }} />
                <NewTabLink href={"mailto:connect@aadityachapagain.com"}>
                  connect@aadityachapagain.com
                </NewTabLink>
              </div>
              <div className="flex items-center justify-end gap-1 mb-1">
                <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 12 }} />
                <NewTabLink href={"https://aadityachapagain.com"}>
                  aadityachapagain.com
                </NewTabLink>
              </div>
              <div className="flex items-center justify-end gap-1 mb-1">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 12 }} />
                <NewTabLink
                  href={"https://www.linkedin.com/in/aadityachapagain/"}
                >
                  linkedin.com/in/aadityachapagain
                </NewTabLink>
              </div>
              <div className="flex items-center justify-end gap-1">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: 12 }} />
                <NewTabLink href={"https://github.com/aadityachapagain/"}>
                  github.com/aadityachapagain
                </NewTabLink>
              </div>
            </div>
          </div>

          {/* Summary - More concise */}
          <div className="text-xs text-stone-700 border-t border-b border-gray-300 py-2 mb-3">
            Machine Learning Engineer skilled in Natural Language Processing
            with {distanceToNow(new Date("2019-04-01 12:00"), false)} of
            experience prototyping intelligent machine learning platforms and
            transforming startup ideas into production solutions. Analytical,
            client-focused, detail-oriented professional with strong technical
            abilities and quick concept comprehension.
          </div>

          <div className="flex gap-4">
            {/* Left Column */}
            <div className="w-[58%]">
              {/* Experience - Most important section gets more space */}
              <div className="mb-3">
                <div className="font-bold text-base border-b border-gray-400 mb-1 pb-1">
                  EXPERIENCE
                </div>

                {experiences.map((exp, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between">
                      <div className="font-semibold text-sm">
                        {exp.position} - {exp.company}
                      </div>
                      <div className="text-xs italic">{exp.period}</div>
                    </div>
                    <div className="text-xs mb-1 text-gray-600">
                      {exp.location}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mb-3">
                <div className="font-bold text-base border-b border-gray-400 mb-1 pb-1">
                  EDUCATION
                </div>

                {education.map((edu, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between">
                      <div className="font-semibold text-sm">{edu.degree}</div>
                      <div className="text-xs italic">{edu.period}</div>
                    </div>
                    <div className="text-xs mb-1">{edu.institution}</div>
                    <div className="text-xs text-gray-600">{edu.location}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-[42%]">
              {/* Skills - ATS-friendly list format */}
              <div className="mb-3">
                <div className="font-bold text-base border-b border-gray-400 mb-1 pb-1">
                  SKILLS
                </div>

                <div className="text-xs">
                  <ul className="pl-5 list-disc">
                    {skills.map((skill, index) => (
                      <li key={index} className="mb-1">
                        <span className="font-semibold">{skill.category}:</span>{" "}
                        {skill.skills}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Certifications - Compact format */}
              <div>
                <div className="font-bold text-base border-b border-gray-400 mb-1 pb-1">
                  CERTIFICATIONS
                </div>

                {certifications.map((cert, index) => (
                  <div key={index} className="mb-2">
                    <div className="font-semibold text-sm mb-1">
                      {cert.name}
                    </div>
                    <ul className="text-xs pl-5 list-disc">
                      {cert.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <NewTabLink href={link.url}>
                            {
                              link.url
                                .replace(/^https?:\/\/(www\.)?/, "")
                                .split("/")[0]
                            }
                          </NewTabLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PrintableResume.displayName = "PrintableResume";

export default PrintableResume;
