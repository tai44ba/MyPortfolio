import { motion } from 'framer-motion';
import React from 'react';
import {projects} from '../assets/data/data.js'
import Header from './Header.jsx';

function Portfolio({isGoingUp}) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: isGoingUp ? 100 : -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isGoingUp ? -100 : 100 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
    <div className="py-32 h-screen">
      <h2 className="text-4xl text-center font-bold text-white mb-10 transform">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white/70 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-transform duration-300 ease-in-out"
          >
            <img src={project.image} alt={project.title} className="w-full h-60 "/>
            <div className="p-6">
              <h3 className="text-2xl text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-4">{project.description}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors"><a href={project.path} target="_blank" rel="noopener noreferrer">Learn More</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
}

export default Portfolio;
