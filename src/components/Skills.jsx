import React from "react";

const Skills = () => {
  const skillsets = [
    {
      title: "Frontend",
      skills: [
        "Html",
        "CSS",
        "JavaScript",
        "React",
        "TailwindCSS",
        "Daisy Ui",
        "Zustand",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "jwt",
        "Socket.io",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "Git hub","Postman","Render","Vercel"],
    },
  ];

  return (
    <div id="skills" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillsets.map((category, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#2a2a2a] rounded-full text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
