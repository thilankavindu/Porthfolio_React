
import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills<span className="text-cyan-400">.</span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {SKILLS_DATA.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-slate-600">
              <skill.icon className="text-6xl mb-2" style={{ color: skill.color }} />
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
