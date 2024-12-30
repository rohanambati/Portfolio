import React from 'react';
import { Brain, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Brain className="text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-300">
              Pursuing B.Tech in Computer Science and Engineering (AI&ML) at SR University
              with a CGPA of 8.25. Focused on advanced AI/ML technologies and their
              practical applications.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">Specialization</h3>
            </div>
            <p className="text-gray-300">
              Specialized in Generative AI, Machine Learning, and Computer Vision.
              Passionate about developing innovative AI solutions and pushing the
              boundaries of what's possible with technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;