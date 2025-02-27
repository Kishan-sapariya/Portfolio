import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Twitter Clone",
      description:
        "Full-stack Twitter Clone including tweets, likes, comments, and user authentication",
      image:
        "https://res.cloudinary.com/dlmeyxgpj/image/upload/v1740648472/portfoilio/bn3cbsefwrzbmwfmeeyh.webp",
      tech: [
        "React",
        "Tailwind css",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "JWT",
      ],
      githubLink: "https://github.com/Kishan-sapariya/Twitter-clone",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Full-stack chat app with real-time messaging, user authentication functionality",
      image:
        "https://res.cloudinary.com/dlmeyxgpj/image/upload/v1740649510/portfoilio/wgrpdfxwcyz0fbuyqe54.jpg",
      tech: [
        "React",
        "Tailwind css",
        "Socket.io",
        "Node.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
      ],
      githubLink: "https://github.com/Kishan-sapariya/Chatter",
    },
    {
      title: "Blog Platform",
      description:
        "Modern blogging platform with Likes, comments, and user profiles",
      image:
        "https://res.cloudinary.com/dlmeyxgpj/image/upload/v1740649534/portfoilio/gmg1l2ufyk40p9puel3f.png",
      tech: [
        "React",
        "Zustand",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JWT",
      ],
      githubLink:
        "https://github.com/Kishan-sapariya/codesoft-internship/tree/main/Blog%20app",
    },
    {
      title: "Project Management Tool",
      description:
        "Project management system with team collaboration and Tracking progress functionality",
      image:
        "https://res.cloudinary.com/dlmeyxgpj/image/upload/v1740649707/portfoilio/bffkhtsatxclvhcr6ccn.png",
      tech: [
        "React",
        "Tailwind css",
        "Zustand",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "jwt",
      ],
      githubLink:
        "https://github.com/Kishan-sapariya/codesoft-internship/tree/main/Project%20Management",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and customer data with analytics",
      image:
        "https://res.cloudinary.com/dlmeyxgpj/image/upload/v1740648487/portfoilio/pscatziozecl6r0tosio.png",
      tech: [
        "React",
        "Tailwind css",
        "Zustand",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Chart.js",
      ],
      githubLink: "https://github.com/Kishan-sapariya/E-commerece",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot powered by Google Gemini API with conversation",
      image:
        "https://res.cloudinary.com/dlmeyxgpj/image/upload/v1740648471/portfoilio/zpenelkjphdvvqfxnfxv.jpg",
      tech: ["React", "Google Gemini API", "TailwindCSS", "Responsive Design"],
      githubLink: "https://github.com/Kishan-sapariya/Ai-chatbot",
    },
  ];

  return (
    <div id="projects" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-200"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#2a2a2a] rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-cyan-400 text-cyan-400 text-center py-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
