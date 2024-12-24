import React from "react";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  const skills = [
    t("skills.html"),
    t("skills.css"),
    t("skills.javascript"),
    t("skills.react"),
    t("skills.nodejs"),
    t("skills.git"),
    t("skills.bootstrap"),
    t("skills.jquery"),
    t("skills.uiux"),
    t("skills.figma"),
    t("skills.problemSolving"),
    t("skills.communication"),
    t("skills.timeManagement"),
    t("skills.teamwork"),
    t("skills.empathy"),
    t("skills.adaptability"),
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center">{t("skills.title")}</h2>
        <div className="skills-wrapper d-flex flex-wrap justify-content-center">
          {skills.map((skill, index) => (
            <span className="moving-skill mx-2 my-1" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
