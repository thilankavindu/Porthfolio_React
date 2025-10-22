
import React from 'react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Education<span className="text-cyan-400">.</span>
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 w-1 bg-cyan-400/30 h-full transform -translate-x-1/2"></div>
          {EDUCATION_DATA.map((item, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              </div>
              <div className="z-10 flex items-center order-1 bg-cyan-400 shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto text-slate-900 font-semibold text-lg"></div>
              </div>
              <div className="order-1 bg-slate-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="mb-2 text-sm font-bold text-cyan-400">{item.date}</p>
                <h3 className="mb-2 font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-slate-400">{item.institution}</p>
                <p className="text-sm leading-snug tracking-wide text-slate-400 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
