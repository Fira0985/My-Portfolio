import { ExternalLink, Github } from 'lucide-react';
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "TensorFlow", "WebSocket", "React"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with animations and responsive design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} /> Live
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github size={20} /> Code
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;