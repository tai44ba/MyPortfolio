import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Home({ isGoingUp }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: isGoingUp ? 100 : -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: isGoingUp ? -100 : 100 }}
        transition={{ duration: 0.4 }}
      >
        <Header />
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <img
            className="rounded-full aspect-square w-[220px] m-4"
            src="../src/assets/imageAndVideo/IMG_20241012_112212.jpg"
            alt="image"
          />
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm Taishi Shibamoto
          </h1>
          <p className="text-4xl font-bold text-white mt-4 transform">
            I'm
            <span className="text-4xl font-bold text-blue-500 mt-4 transform">
              <Typewriter
                words={[" a Full-Stack Web Developer.", " Enjoying Coding!"]}
                loop={0} // Number of loops, set to 0 or false for infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div className="text-gray-300 text-xl w-6/12 m-3">
            <p>
              I am a consistent individual, always eager to discover new things.
              I have a passion for mastering anything I set out to learn. I am
              ready to make a meaningful contribution and achieve great things.
            </p>
          </div>
          <div className="flex gap-7">
            <NavLink to="/portfolio">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
                View My Work
              </button>
            </NavLink>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
              My Resume
            </button>
            <button className="mt-6 px-6 py-3 bg-blue-400 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
              My Github
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
