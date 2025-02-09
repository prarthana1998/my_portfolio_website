import React from 'react';
import { education } from '../../data';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 mb-6 last:mb-0"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-blue-600 mb-2">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mb-4">{edu.duration}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;