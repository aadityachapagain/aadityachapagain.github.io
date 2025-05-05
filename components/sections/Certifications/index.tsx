import React from "react";
import CertificationCarousel from "./CertificationCarousel";
import { getCertifications } from "../../../lib/ProfileData";

const Certifications: React.FC = () => {
  const certifications = getCertifications();

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold">Certifications</h3>
        </div>

        <CertificationCarousel certifications={certifications} />
      </div>
    </section>
  );
};

export default Certifications;
