import React from 'react';
import { socialLinks } from './SocialLinks';
import { ProfileImage } from './ProfileImage';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16" id="hero">
      <div className="text-center">
        <ProfileImage />
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Rohan Ambati
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          AI/ML Ex-Intern | Generative AI Enthusiast
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="animate-bounce">
          <p className="text-gray-400">Scroll down to learn more</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;