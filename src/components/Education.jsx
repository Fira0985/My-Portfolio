import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import '../styles/Education.css';

function Education() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "MIT",
      period: "2016 - 2020",
      description: "Major in Software Engineering with Honors",
      icon: <BookOpen size={24} />
    },
    {
      degree: "Certifications",
      institution: "Various Institutions",
      period: "2018 - Present",
      description: "AWS Certified Developer, Google Cloud Professional",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="education" className="education">
      <h2>Education & Certifications</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p className="period">{item.period}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;