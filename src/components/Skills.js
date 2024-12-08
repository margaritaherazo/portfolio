import React from 'react';

function Skills() {
    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Git",
      "Bootstrap",
      "jQuery",
      "UI & UX Design",
      "Figma",
      "Problem-solving",
      "Communication",
      "Time Management",
      "Teamwork",
      "Empathy",
      "Adaptability",
    ];
  
    return (
      <section id="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-wrapper">
            {skills.map((skill, index) => (
              <span className="moving-skill" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;