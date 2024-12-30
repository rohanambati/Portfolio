import React from 'react';
import { CertificationCard } from './CertificationCard';
import { certifications } from './certificationData';

const Certifications = () => {
  return (
    <section className="py-20" id="certifications">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;