import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8">
            Specialized in building robust web applications with MERN & PERN
            stack
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-cyan-400 text-black px-8 py-3 rounded-lg hover:bg-cyan-500 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://res.cloudinary.com/dlmeyxgpj/image/upload/v1740649855/portfoilio/kd3ekoaewvp55zlq6fzw.jpg"
            alt="Developer"
            className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
