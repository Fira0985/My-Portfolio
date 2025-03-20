import { BookOpen, GraduationCap } from "lucide-react";
import React, { useState } from "react";
import Omishtu from '../assets/cert.jpg';
import ProgrammingFundamental from '../assets/programming.png';
import "../styles/Education.css";

function Education() {
  const [selectedDocument, setSelectedDocument] = useState(null);

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
          "Studied courses including Software Engineering Principles, Data Structures, Web Development, and Network Security.",
        ],
        document: {
          image: "path-to-your-image.jpg", // Replace with actual image path
          description: "This is an academic transcript from Haramaya University.",
        },
      },
      {
        schoolName: "Udacity (GC - Ethiopia & Accenture)",
        subHeader: "Programming Fundamentals Nanodegree",
        duration: "November 27, 2024",
        desc: "Completed Udacity's Programming Fundamentals Nanodegree, earning a verified certificate through GC - Ethiopia and Accenture.",
        descBullets: [
          "Acquired foundational programming skills.",
          "Confirmed by Udacity: [View Certificate](https://www.udacity.com/certificate/e/8aa5a66c-ac33-11ef-95e5-afd65eb85f4c)",
        ],
        document: {
          image: ProgrammingFundamental,
          description: "This is the certificate from Udacity.",
        },
      },
      {
        schoolName: "Omishtu-Joy Tech Solution",
        subHeader: "MERN Stack Course",
        duration: "June 2024 - August 2024",
        desc: "Earned a 2-month Full Stack Web Development (MERN) certification from Omishtu-Joy Tech Solutions.",
        descBullets: [
          "Developed a full stack web application.",
          "Studied courses including front-end, back-end, version control, and database management (MongoDB).",
        ],
        document: {
          image: Omishtu,
          description: "This is the certification from Omishtu-Joy Tech Solution.",
        },
      }
    ],
  };

  if (!educationInfo.display) return null;

  return (
    <section id="education" className="education">
      <h2>Education & Certifications</h2>
      <div className="timeline">
        {educationInfo.schools.map((school, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
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
              <button
                className="see-document-button"
                onClick={() => setSelectedDocument(school.document)}
              >
                See Document
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for displaying document */}
      {selectedDocument && (
        <div className="document-popup">
          <div className="document-content">
            <span className="close-button" onClick={() => setSelectedDocument(null)}>
              &times;
            </span>
            <img src={selectedDocument.image} alt="Document" />
            <p>{selectedDocument.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;
