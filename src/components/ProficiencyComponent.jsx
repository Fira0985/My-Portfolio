import React, { useEffect, useState } from "react";
import "../styles/ProficiencyComponent.css";

const ProficiencyComponent = () => {
    const skills = [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "CSS", level: 97 },
        { name: "Python", level: 85 },
        {name: "Java", level: 70}
    ];

    const [isVisible, setIsVisible] = useState(false);

    // Check when the component is in view to trigger the animation
    const handleScroll = () => {
        const proficiencyElement = document.getElementById("proficiency-container");
        const bounding = proficiencyElement.getBoundingClientRect();
        if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check immediately when the component loads

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            id="proficiency-container"
            className={`proficiency-container ${isVisible ? "visible" : ""}`}
        >
            <h2>My Programming Skills</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <div className="skill-name">
                            <h3>{skill.name}</h3>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="progress-bar-container">
                            <div
                                className={`progress-bar ${isVisible ? "fill" : ""
                                    }`}
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProficiencyComponent;
