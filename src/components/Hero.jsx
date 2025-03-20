import React from 'react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/effect-cube'; // Add styles for the cube effect (3D effect)
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide

import { Github, Linkedin, Mail } from 'lucide-react';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCube, Navigation } from "swiper/modules";
import Profile from "../assets/profile.png";
import '../styles/Hero.css';
import SkillBar from './ProficiencyComponent';
import Resume from './Resume';

function Hero() {
  return (
    <Swiper
      spaceBetween={0} // No gap between slides
      slidesPerView={1} // Only one slide visible at a time
      loop={true} // Enable looping of slides
      effect="cube" // Cube transition effect
      grabCursor={true} // Enable cursor as a grab to swipe
      autoplay={{ delay: 5000 }} // Automatically transition after 5 seconds
      speed={1500} // Controls cube rotation speed
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 30,
        shadowScale: 0,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[EffectCube, Navigation]}
      className='mySwiper'
    >
      <SwiperSlide>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Firafis Berhanu</span></h1>
            <h2>Full Stack Developer</h2>
            <p>Crafting digital experiences with code and creativity</p>

            <div className="cta-buttons">
              <a href="#projects" className="primary-button">
                View My Work
              </a>
              <div className="social-links">
                <a href="https://github.com/Fira0985" target="_blank" rel="noopener noreferrer"><Github /></a>
                <a href="https://www.linkedin.com/in/firafis-berhanu-89345a327/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                <a href="mailto:firafisberhanu4@gmail.com"><Mail /></a>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={Profile} alt="Developer" />
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <Resume />
      </SwiperSlide>

      <SwiperSlide>
        <SkillBar />
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
