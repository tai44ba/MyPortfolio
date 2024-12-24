import { motion } from "framer-motion";
import React from "react";
import Header from "./Header.jsx";
import { projects } from "../assets/data/data.js";
import { useState } from "react";

function Portfolio({ isGoingUp }) {
  const [openP, setOpenP] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = (projectId) => {
    setOpenP((id) => (id === projectId ? null : projectId));
    setIsOpen((o) => !o);
  };
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
        <div className="flex flex-wrap gap-5 px-4 justify-around">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`m-4 bg-white/70 shadow-lg rounded-lg overflow-hidden transform hover:transition-transform duration-300 ease-in-out h-80 w-72`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-4/6 w-screen"
              />
              <div className="flex flex-col p-4 h-2/6 justify-between">
                <h3 className="text-lg text-gray-800">{project.title}</h3>
                <p className="text-blue-900 text-sm">{project.technology}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center opacity-0 hover:opacity-100">
                <button
                  className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors"
                  onClick={() => toggleDetails(project.id)}
                >
                  Detail
                </button>
              </div>
              {openP === project.id && (
                <div
                  className={`absolute inset-0 bg-slate-50 bg-opacity-90 p-4 rounded-lg shadow-lg flex flex-col justify-between text-gray-800 z-10`}
                >
                  <div className="flex flex-col">
                    <p className="text-sm my-2">{project.description}</p>
                    <p className="text-sm text-red-500 my-2">{project.test}</p>
                  </div>
                  <div className="flex flex-col">
                    <button className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors">
                      <a
                        href={project.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        demo/repo
                      </a>
                    </button>
                    <button
                      className="text-blue-600 mt-auto underline"
                      onClick={() => toggleDetails(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
