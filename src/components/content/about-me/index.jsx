import React from "react";
import "./style.css";

function Aboutme({ lang }) { 
  
  const translations = {
    en: {
      tag: "About me",
      title: "Back-End Developer focused on performance and scalability",
      text1: "I'm Lucas, a developer with experience in PHP and Laravel, focused on building robust APIs and well-structured systems. I enjoy solving complex problems and turning ideas into efficient solutions.",
      text2: "Currently, I'm deepening my knowledge in architecture, best practices, and integrations, always seeking to evolve as a developer.",
      btnProjects: "View projects",
      btnContact: "Contact"
    },
    pt: {
      tag: "Sobre mim",
      title: "Desenvolvedor Back-End focado em performance e escalabilidade",
      text1: "Sou o Lucas, desenvolvedor com experiência em PHP e Laravel, focado na construção de APIs robustas e sistemas bem estruturados. Gosto de resolver problemas complexos e transformar ideias em soluções eficientes.",
      text2: "Atualmente venho aprofundando meus conhecimentos em arquitetura, boas práticas e integrações, sempre buscando evoluir como dev.",
      btnProjects: "Ver projetos",
      btnContact: "Contato"
    }
  };

  const t = translations[lang] || translations.pt;

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-5 text-center">
            <div className="about-img">
              <img src="/img/home-portfolio.png" alt="about" />
            </div>
          </div>

          <div className="col-md-7">
            <span className="about-tag">{t.tag}</span>

            <h2 className="about-title">
              {t.title}
            </h2>

            <p className="about-text">
              {t.text1}
            </p>

            <p className="about-text">
              {t.text2}
            </p>

            <div className="about-buttons">
              <a href="#projects" className="btn btn-dark">
                {t.btnProjects}
              </a>
              <a href="#contact" className="btn btn-outline-light">
                {t.btnContact}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Aboutme;