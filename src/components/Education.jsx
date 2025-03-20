import { BookOpen, GraduationCap } from 'lucide-react';
import React from 'react';
import '../styles/Education.css';

function Education() {
  const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
      {
        schoolName: "Haramaya University",
        subHeader: "Bachelor of Science in Software Engineering",
        duration: "September 2021 - Present",
        desc: "Focusing on software development, database management, and programming languages.",
        descBullets: [
          "Developed a web application as part of a capstone project.",
          "Maintained a GPA of 3.93, showcasing strong problem-solving and analytical skills.",
          "Studied courses including Software Engineering Principles, Data Structures, Web Development, and Network Security."
        ]
      },

      {
        schoolName: "Omishtu-Joy Tech Solution",
        subHeader: "MERN Stack Course",
        duration: "June 2024 - August 2024",
        desc: "Earned a 2-month Full Stack Web Development (MERN) certification from Omishtu-Joy Tech Solutions (June–August 2024). Gained expertise in front-end and back-end development, version control, testing, debugging, database management, data modeling, and using modern frameworks and libraries. Demonstrated proficiency in building dynamic, scalable web applications, showcasing strong practical skills in the MERN stack (MongoDB, Express.js, React, and Node.js).",
        descBullets: [
          "Developed a full stack web application.",
          "Studied courses including fronted, backend, version control, and database management(MongoDB)."
        ]
      }
    ]
  };

  if (!educationInfo.display) return null; // Hide if display is false

  return (
    <section id="education" className="education">
      <h2>Education & Certifications</h2>
      <div className="timeline">
        {educationInfo.schools.map((school, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              {/* You can choose appropriate icons for each school or course */}
              {index === 0 ? <GraduationCap size={24} /> : <BookOpen size={24} />}
            </div>
            <div className="timeline-content">
              <h3>{school.schoolName}</h3>
              <h4>{school.subHeader}</h4>
              <p className="period">{school.duration}</p>
              <p>{school.desc}</p>
              <ul>
                {school.descBullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
