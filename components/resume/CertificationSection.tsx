import React from "react";
import NewTabLink from "../newtabLink";

export interface Certification {
  name: string;
  links: { url: string; display: string }[];
}

interface CertificationSectionProps {
  certifications: Certification[];
}

const CertificationSection: React.FC<CertificationSectionProps> = ({
  certifications
}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-purple-400 mb-3">
        CERTIFICATIONS
      </h3>
      <div className="h-1 bg-purple-900/50 mb-4"></div>

      {certifications.map((cert, index) => (
        <div
          key={index}
          className={index !== certifications.length - 1 ? "mb-4" : ""}
        >
          <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
          <div className="flex flex-col text-gray-300 ml-4 mt-1 text-sm">
            {cert.links.map((link, linkIndex) => (
              <NewTabLink
                key={linkIndex}
                className="hover:text-purple-400 truncate"
                href={link.url}
              >
                {link.display}
              </NewTabLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationSection;
