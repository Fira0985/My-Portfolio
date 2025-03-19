import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import Profile from "../assets/profile.png";
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Firafis Berhanu</span></h1>
        <h2>Full Stack Developer</h2>
        <p>Crafting digital experiences with code and creativity</p>
        
        <div className="cta-buttons">
          <a href="#projects" className="primary-button">
            View My Work <ArrowRight size={20} />
          </a>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="mailto:contact@example.com"><Mail /></a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={Profile} alt="Developer" />
      </div>
    </section>
  );
}

export default Hero;