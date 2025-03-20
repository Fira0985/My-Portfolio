import React, { useEffect, useState } from "react";
import resume1 from "../assets/resume1.png";
import resume2 from "../assets/resume2.png";
import resume3 from "../assets/resume3.png";
import resume4 from "../assets/resume4.png";
import resume5 from "../assets/resume5.png";
import resume6 from "../assets/resume6.png";
import resume7 from "../assets/resume7.png";
import resume8 from "../assets/resume8.png";
import "../styles/ResumeComponent.css";

const ResumeComponent = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const resumeImages = [
        resume1,
        resume2,
        resume3,
        resume4,
        resume5,
        resume6,
        resume7,
        resume8,
    ];

    useEffect(() => {
        const sectionInterval = setInterval(() => {
            setCurrentSection((prevSection) => {
                return (prevSection + 1) % resumeImages.length;
            });
        }, 2000);

        return () => clearInterval(sectionInterval);
    }, []);

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/path/to/your/resume.pdf"; // Change to the path of your resume file
        link.download = "Resume.pdf";
        link.click();
    };

    return (
        <div className="resume-container">
            <div className="resume-image-container">
                <div
                    className="resume-images-wrapper"
                    style={{ transform: `translateX(-${currentSection * 100}%)` }}
                >
                    {resumeImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Resume Section ${index + 1}`}
                            className="resume-image"
                        />
                    ))}
                </div>
            </div>
            <div className="portfolio-description">
                <h2>My Resume</h2>
                <p>
                    Welcome to my portfolio! I'm a passionate software engineer with experience in various technologies including front-end development, Java, Python, and more. My goal is to build meaningful and scalable software solutions. Feel free to explore my resume as I walk you through my skills and experience.
                </p>
                <button className="resume-button" onClick={handleDownloadResume}>
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default ResumeComponent;
