import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { NavLink } from "react-router-dom";

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
          <img className="rounded-full aspect-square w-[220px] m-3" src="../src/assets/imageAndVideo/IMG_20241012_112212.jpg" alt="image" />
          <NavLink to='/about'>
          <h1 className="text-5xl font-bold text-white hover:text-blue-600 hover:cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
            Hello, I'm Taishi Shibamoto
          </h1>
          </NavLink>
          <p className="text-xl text-white mt-4 transform">
            I'm a Full-Stack Web Developer. Welcome to my portfolio!
          </p>
          <NavLink to='/portfolio'>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
            View My Work
          </button>
          </NavLink>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
