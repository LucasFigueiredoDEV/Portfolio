import React from "react";
import "./style.css";


const skills = [
  "PHP", "Laravel", "Node.js",
  "JavaScript", "React", "Vue", "HTML5", "CSS3",
  "MySQL",
  "Git", "Bootstrap"
];

function Capabilities({lang}) {
  const translations = {
    en: {
      title_capabilities: "My Capabilities"
    },
    pt: {
      title_capabilities: "Minhas Habilidades"
    }
  };

  const t = translations[lang] || translations.pt;

  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities-inner">
        <h2 className="title-capabilities">{t.title_capabilities}</h2>

       
          <div className="skill-category d-flex flex-wrap justify-content-center">
            <div className="skill-list">
              {skills.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

      </div>
    </section>
  );
}

export default Capabilities;