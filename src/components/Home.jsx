import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import profilePic from "../assets/imageAndVideo/IMG_20241012_112212.jpg";

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
          <div className="flex justify-around w-full mb-20">
            <div className="flex flex-col w-5/12 items-center pl-16">
              <img
                className="rounded-full aspect-square w-[220px] m-6"
                src={profilePic}
                alt="image"
              />
              <p className="text-sm text-gray-400" >junior full stack developer</p>
              <h1 className="text-5xl font-bold text-white m-3">
                Taishi Shibamoto
              </h1>
              <p className="text-4xl font-bold text-white mt-6 transform">
                I'm
                <span className="text-4xl font-bold text-blue-500 mt-4 transform">
                  <Typewriter
                    words={[
                      " a Full-Stack Web Developer.",
                      " enjoying Coding!",
                      " a Climber",
                      " a electric music lover",
                    ]}
                    loop={0} // Number of loops, set to 0 or false for infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </span>
              </p>
            </div>
            <div className="flex items-center w-7/12" >
              <div className="text-gray-300 text-xl px-14 mx-14 border-l-2">
                <p className="font-bold text-start">
                  Hi, I’m Taishi , a passionate and motivated Full Stack Web
                  Developer with expertise in the MERN stack (MongoDB,
                  Express.js, React, and Node.js).<br/> I recently completed my
                  training and am eager to start my career in web development.
                  My approach is rooted in consistency, creativity, and a
                  commitment to delivering high-quality results.<br/> When I’m not
                  coding, you can find me exploring the world of hiking in nature, bouldering, or enjoying digging the attractive beats of techno and
                  house music at a record store.<br/> These activities fuel my creativity and inspire
                  my problem-solving mindset.<br/> I’m excited about the opportunity
                  to bring my skills, determination, and love for development to
                  a dynamic team.<br/> Let’s build something amazing together!
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-7">
            <NavLink to="/portfolio">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
                View My Work
              </button>
            </NavLink>
            <a
              href="https://drive.google.com/file/d/1nP8UGtmZ9kyLysCNZfgTyvn20rW8l7E5/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
                My Resume
              </button>
            </a>
            <a
              href="https://github.com/tai44ba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-6 py-3 bg-blue-400 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
                <div className="flex ">
                  <FaGithub className="text-2xl mx-1" />
                  <span>Github</span>
                </div>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/taishi-shibamoto-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-6 py-3 bg-blue-300 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg transform">
                <div className="flex ">
                  <FaLinkedin className="text-2xl mx-1" />
                  <span>Linked in</span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
