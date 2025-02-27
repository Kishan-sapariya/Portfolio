import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center min-h-screen py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-semibold text-cyan-400">Who I Am</h3>
            <p className="text-lg text-gray-300 max-w-lg mx-auto">
              Full Stack Developer with expertise in building scalable web
              applications using modern technologies. Passionate about creating
              efficient solutions and delivering exceptional user experiences.
            </p>
          </div>

          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-semibold text-cyan-400">What I Do</h3>
            <ul className="space-y-4 text-lg text-gray-300 max-w-lg mx-auto">
              <li className="flex items-center gap-3 justify-center">
                <span className="text-cyan-400">✓</span>
                Develop full-stack web applications
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span className="text-cyan-400">✓</span>
                Hands on experience in RESTful APIs
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span className="text-cyan-400">✓</span>
                Responsive web design with TailwindCSS
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span className="text-cyan-400">✓</span>
                Implement database architecture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
