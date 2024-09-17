import React from 'react';
import {skills} from '../../public/data.js'

function Skills() {

  return (
    <div className="bg-white py-32 px-4 md:px-20">
      <h2 className="text-4xl text-center text-gray-800 mb-10 transform">My Skills</h2>
      <div className="grid grid-cols-3 gap-8 text-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-8 bg-gray-100/70 shadow-md rounded-lg hover:bg-gray-200 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <span className="text-6xl">{skill.icon}</span>
            <h3 className="text-xl mt-4 text-gray-800">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
