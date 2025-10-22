
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { FaCode, FaPaintBrush } from 'react-icons/fa';

const ICONS = [FaCode, FaPaintBrush];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Services<span className="text-cyan-400">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SERVICES_DATA.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={index} className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-700 text-cyan-400 rounded-full p-3 text-3xl mr-4">
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
