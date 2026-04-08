import React from "react";
import "./style.css";

const skills = {
  Backend: ["PHP", "Laravel", "Node.js"],
  Frontend: ["JavaScript", "React", "Vue", "HTML5", "CSS3"],
  Database: ["MySQL"],
  "Tools & DevOps": ["Git", "Bootstrap"]
};

function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities-inner">
        <h2 className="title-capabilities">My Capabilities</h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-list">
              {items.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Capabilities;