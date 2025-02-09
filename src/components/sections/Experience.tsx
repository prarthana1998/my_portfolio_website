import React from 'react';
import { experience } from '../../data';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <div
              key={index}
              className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 
                before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-200 last:mb-0"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-[3px]" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.position}</h3>
              <p className="text-blue-600 mb-2">{job.company}</p>
              <p className="text-gray-500 text-sm mb-4">{job.duration}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;