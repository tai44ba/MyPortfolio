import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-gray-800 hover:text-blue-600 transition duration-500 ease-in-out transform hover:scale-105">
        Hello, I'm Taishi Shibamoto
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        I'm a Full-Stack Web Developer. Welcome to my portfolio!
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg">
        View My Work
      </button>
    </div>
  );
}

export default Home;

