import React from 'react';
import { Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Java"],
    },
    {
      title: "AI/ML Technologies",
      skills: ["Machine Learning", "Artificial Intelligence", "Generative AI", "Computer Vision"],
    },
    {
      title: "Frameworks & Tools",
      skills: ["LangChain", "Git", "Jupyter Notebook", "Google Colab", "TensorFlow", "Keras"],
    },
    {
      title: "Soft Skills",
      skills: ["Creative Thinking", "Innovation", "Problem Solving"],
    },
    {
      title: "Languages",
      skills: ["English", "Hindi", "Telugu"],
    }
  ];

  return (
    <section className="py-20" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Cpu className="text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;