
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Reusable Component Library",
      description: "Created a reusable component library for the web application using Angular, resulting in faster development time for new features",
      tech: "Angular",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Typing Speed Calculator",
      description: "Developed a typing speed calculator application in Java",
      tech: "Java",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Online Product Booking",
      description: "Created an online product booking system using data base",
      tech: "Database, Web Development",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Video Editing Competition",
      description: "Video editing competition conducted by Sony",
      tech: "Vegas Editing",
      image: "https://via.placeholder.com/400x300"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg 
                                     transform transition-all duration-300 hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 
                         group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  <p className="mt-2 text-sm text-gray-300">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
