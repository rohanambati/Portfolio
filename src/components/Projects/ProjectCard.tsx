import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { ProjectType } from './types';

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div
    className={`group bg-gray-800/50 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
      project.highlight ? 'border border-blue-500/30 hover:border-blue-400' : ''
    }`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <Code className="text-blue-400 mr-2 group-hover:rotate-12 transition-transform duration-300" />
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        <ExternalLink size={20} className="transform hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, index) => (
        <span
          key={index}
          className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm transform hover:scale-105 transition-transform duration-200"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);