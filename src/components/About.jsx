import { Clock, Coffee, MapPin } from 'lucide-react';
import React from 'react';
import Profile from "../assets/profile.png";
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am Firafis Berhanu, a skilled software engineer specializing in full-stack development
            with the MERN stack (MongoDB, Express.js, React, Node.js).
            I have strong expertise in front-end development, UI/UX design, and backend architecture,
            building scalable and efficient web applications.
            Additionally, I am proficient in Python programming and database management.
            I also have beginner-level experience in Unity game development.
            Passionate about creating seamless digital experiences,
            I continuously refine my skills to develop innovative and high-performance solutions.
          </p>
          <div className="quick-facts">
            <div className="fact">
              <Clock size={20} />
              <span>Continuous Learner</span>
            </div>
            <div className="fact">
              <MapPin size={20} />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <div className="fact">
              <Coffee size={20} />
              <span>Coffee Enthusiast</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img
            src={Profile}
            alt="About Me"
          />
        </div>
      </div>
    </section>
  );
}

export default About;