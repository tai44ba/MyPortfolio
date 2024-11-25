import { motion } from "framer-motion";
import React from "react";
import Header from "./Header.jsx";
import { projects } from "../assets/data/data.js";

function Portfolio({ isGoingUp }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isGoingUp ? 100 : -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isGoingUp ? -100 : 100 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <div className="py-32 h-screen">
        <h2 className="text-4xl text-center font-bold text-white mb-6 transform">
          My Projects
        </h2>
        <div className="flex flex-col gap-4 px-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex m-7 h-max-48 relative bg-white/70 shadow-lg rounded-lg overflow-hidden transform hover:shadow-2xl transition-transform duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-fill w-2/12"
              />
              <div className="flex p-4 w-10/12">
                <div className="w-9/12">
                  <h3 className="text-xl text-gray-800">{project.title}</h3>
                  <p className="text-gray-700 mt-2 text-md overflow-hidden">
                    {project.description}
                  </p>
                  <p className="m-2 text-red-500 font-bold">{project.test}</p>
                </div>
                <div className="w-3/12">
                  <p className="m-2 text-blue-900">
                    Tech: {project.technology}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center opacity-0 hover:opacity-100">
                <button className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors">
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More
                  </a>
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
