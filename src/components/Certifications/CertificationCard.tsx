import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { CertificationType } from './types';

interface CertificationCardProps {
  certification: CertificationType;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-blue-500/30 hover:border-blue-400">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <Award className="text-blue-400 mr-2 group-hover:rotate-12 transition-transform duration-300" />
        <h3 className="text-xl font-semibold">{certification.title}</h3>
      </div>
      <a
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        <ExternalLink size={20} className="transform hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
    <p className="text-gray-300">{certification.issuer}</p>
  </div>
);