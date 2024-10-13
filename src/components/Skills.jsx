import { motion } from "framer-motion";
import React from "react";
import Header from "./Header.jsx";
import { skills } from "../assets/data/data.js";

function Skills({isGoingUp}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isGoingUp ? 100 : -100}}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isGoingUp ? -100 : 100}}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <div className="py-32 h-screen px-4 md:px-20">
        <h2 className="text-4xl text-center font-bold text-white mb-10 transform">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-around text-center gap-8">
          {skills.map((skill) => (<a href={skill.path} target="_blank" rel="noopener noreferrer">
            <div
              key={skill.id}
              className="p-5 min-w-[190px] bg-gray-100/80 shadow-md rounded-lg hover:bg-gray-200 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-center"><img src={skill.icon} alt="image"/></div>
              <h3 className="text-xl font-bold mt-4 text-gray-800">{skill.name}</h3>
            </div></a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
