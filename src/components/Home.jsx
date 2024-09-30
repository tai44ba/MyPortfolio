import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

function Home({isGoingUp}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: isGoingUp ? 100 : -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y:isGoingUp ? -100 : 100 }}
        transition={{ duration: 0.4 }}
      >
      <Header />
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-5xl font-bold text-gray-800 hover:text-blue-600 transition duration-500 ease-in-out transform hover:scale-105">
            Hello, I'm Taishi Shibamoto
          </h1>
          <p className="text-lg text-gray-600 mt-4 transform">
            I'm a Full-Stack Web Developer. Welcome to my portfolio!
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
            View My Work
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
