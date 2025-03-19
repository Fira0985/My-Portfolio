import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Braces,
  Brush,
  Cloud,
  Code2,
  Database,
  FileCode,
  FlaskConical,
  GitBranch,
  Layers,
  Layout,
  Ruler,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import React, { useRef } from "react";
import "../styles/Skills.css";

const skills = [
  { name: "React", icon: Code2 },
  { name: "JavaScript", icon: Braces },
  { name: "HTML5", icon: FileCode },
  { name: "CSS3", icon: Layout },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: FlaskConical },
  { name: "SQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "REST APIs", icon: Server },
  { name: "Figma", icon: Brush },
  { name: "Adobe XD", icon: Ruler },
  { name: "Responsive Design", icon: Layout },
  { name: "User Research", icon: ShieldCheck },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Layers },
  { name: "AWS", icon: Cloud },
  { name: "Agile", icon: ShieldCheck },
  { name: "Testing", icon: ShieldCheck },
];

const SkillCard = ({ name, icon: Icon, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]), {
    stiffness: 300,
    damping: 30,
  });
  const scale = useSpring(1, {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(event) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (event.clientX - centerX) / (rect.width / 2);
    const y = (event.clientY - centerY) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);

    // Update CSS variables for lighting effect
    cardRef.current.style.setProperty('--mouse-x', `${(event.clientX - rect.left) / rect.width * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${(event.clientY - rect.top) / rect.height * 100}%`);
  }

  function handleMouseEnter() {
    scale.set(1.05);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={cardRef}
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="skill-icon-container"
        initial={false}
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Icon size={28} className="skill-icon" />
      </motion.div>
      <span className="skill-name">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        My Skills
      </motion.h2>

      <div className="laptop-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;