import React from 'react';
import { Terminal, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Achievements
          </span>
        </h2>
        
        <div className="space-y-8 animate-fade-in">
          <div className="bg-gray-800/50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-400">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Terminal className="text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">Machine Learning Internship</h3>
              </div>
              <a
                href="https://drive.google.com/file/d/1PLfLXtKcydYInWcA5JLAgRykisf3I5Cw/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={20} className="transform hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
            <p className="text-gray-400 mb-2">Atharvo Industries Pvt. Ltd. | June 2024</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Developed Facial Emotion Recognition (FER) project using various AI techniques</li>
              <li>Enhanced model accuracy through fine-tuning and optimization</li>
              <li>Collaborated with team members for successful project implementation</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-400">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <span className="bg-blue-500/20 p-2 rounded-full mr-3 group-hover:bg-blue-500/30 transition-colors">
                  <Award className="text-blue-400 w-4 h-4" />
                </span>
                <div>
                  <p className="font-medium">Second Position - University Level Coding Hackathon</p>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="bg-blue-500/20 p-2 rounded-full mr-3 group-hover:bg-blue-500/30 transition-colors">
                  <Award className="text-blue-400 w-4 h-4" />
                </span>
                <div>
                  <p className="font-medium">Winner - University Mock Stock Market Event</p>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="bg-blue-500/20 p-2 rounded-full mr-3 group-hover:bg-blue-500/30 transition-colors">
                  <Award className="text-blue-400 w-4 h-4" />
                </span>
                <div>
                  <p className="font-medium">Literary Captain - High School</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;