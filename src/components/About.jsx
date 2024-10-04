import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

function About({isGoingUp}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isGoingUp ? 100 : -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isGoingUp ? -100 : 100 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <div className="py-32 h-screen">
        ttt
      </div>
    </motion.div>
  );
};

export default About;
