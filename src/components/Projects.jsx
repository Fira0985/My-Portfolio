import { ExternalLink, Github } from 'lucide-react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { EffectCube, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import taskyImage from "../assets/Screenshot (112).png";
import passwordGenImage from "../assets/Screenshot (113).png";

import '../styles/Projects.css';


const bigProjects = {
  title: "My Projects",
  subtitle: "Take a look at the projects I've worked on. Each one highlights my skills, creativity, and passion for building innovative solutions.",
  projects: [
    {
      image: taskyImage,
      projectName: "Tasky App",
      projectDesc: "Tasky is a simple and intuitive task management app designed to help users organize, prioritize, and complete tasks efficiently. The app is perfect for those looking to manage their time and boost productivity. Note: Tasky is still in development.",
      footerLink: [
        { name: "Visit Website", url: "https://github.com/Fira0985/Tasky-app" },
        { name: "View on GitHub", url: "https://github.com/Fira0985/Tasky-app" }
      ]
    },
    {
      image: passwordGenImage,
      projectName: "Weather App",
      projectDesc: "Weather App provides real-time weather data and dynamically changes its background color based on the weather conditions. It fetches data using the OpenWeather API.",
      footerLink: [
        { name: "Visit Website", url: "https://github.com/Fira0985/Weather-App" },
        { name: "View on GitHub", url: "https://github.com/Fira0985/Weather-App" }
      ]
    },
    {
      image: passwordGenImage,
      projectName: "Password Generator",
      projectDesc: "Password Generator is a tool that generates secure, random passwords. After generating a password, it is automatically saved as a text file locally on your device for easy access.",
      footerLink: [
        { name: "Visit Website", url: "https://fira0985.github.io/password_generator/pass.html" },
        { name: "View on GitHub", url: "https://github.com/Fira0985/password_generator" }
      ]
    }
  ],
  display: true
};

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>{bigProjects.title}</h2>
      <p>{bigProjects.subtitle}</p>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 5000 }} // Automatically transition after 5 seconds
        speed={1500} // Controls cube rotation speed
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 30,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Navigation]}
        navigation={true}
        className="MySwiper"
      >
        {bigProjects.projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.projectName} />
              </div>
              <div className="project-info">
                <h3>{project.projectName}</h3>
                <p>{project.projectDesc}</p>
                <div className="project-links">
                  {project.footerLink.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name === "Visit Website" ? <ExternalLink size={20} /> : <Github size={20} />} {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
