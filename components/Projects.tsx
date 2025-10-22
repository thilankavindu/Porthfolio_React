
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects<span className="text-cyan-400">.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex flex-col group transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:-translate-y-2">
              <div className="overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-cyan-400 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center space-x-4 pt-4 border-t border-slate-700/50">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                      <FaGithub className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                      <FiExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
