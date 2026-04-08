import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact({ lang }) { 

  const translations = {
    en: {
      tag: "Contact",
      title: "Liked my work? Let's talk.",
      description: "I'm available for Back-End Developer opportunities. If you want to discuss projects, freelancing, or job openings, hit me up 👇",
      email: "contato@email.com",  // ou mantenha fixo se for o mesmo
      avatarAlt: "avatar"
    },
    pt: {
      tag: "Contato",
      title: "Curtiu meu trabalho? Vamos conversar.",
      description: "Estou disponível para oportunidades como desenvolvedor Back-End. Se quiser trocar uma ideia sobre projetos, freelas ou vagas, me chama 👇",
      email: "contato@email.com",
      avatarAlt: "avatar"
    }
  };

  const t = translations[lang] || translations.pt;

  return (
    <section className="contact py-5 mt-4" id="contact">
      <div className="container contact-container">

        <div className="contact-avatar">
          <img src="/img/foto-ia.jpg" alt={t.avatarAlt} />
        </div>

        <div className="contact-content">
          <span className="contact-tag">{t.tag}</span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>

          <p className="email">
            {t.email}
          </p>

          <div className="contact-socials">
            <a href="#" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;