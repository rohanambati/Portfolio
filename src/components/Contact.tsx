import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <div className="space-y-6">
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
          
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:rohanambati40@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
              <span>rohanambati40@gmail.com</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 mt-8">
            <a
              href="https://github.com/rohanambati"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/rohan64bit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <p className="text-gray-400 mt-8">
            Phone: +91 6303796372
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;