import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Journey({ lang }) { 

  const journeyDataEn = [
    {
      id: 1,
      actual: true,
      title: "Junior Developer",
      date: "September 2025",
      company: "VerdanaTech",
      description: "I work as a Full Stack Developer, with experience in building web, mobile, and desktop applications, delivering end-to-end solutions with a strong focus on performance, scalability, and user experience. On the back-end, I use PHP and Laravel to develop robust, secure, and well-structured APIs. On the front-end, I work with JavaScript and Bootstrap to create modern, responsive interfaces aligned with best usability practices. I also develop mobile applications using Ionic and desktop solutions with Electron, expanding product reach and ensuring consistency across multiple platforms. I have experience creating plugins, pages, and services, actively participating in the entire development lifecycle from requirements definition to final delivery always aiming to generate real business value and optimize processes. I am results-oriented, with a strong focus on clean code, best practices, and continuous improvement, contributing to the development of efficient and scalable systems."
    },
    {
      id: 2,
      title: "Junior Development Analyst",
      date: "February 2025 / September 2025",
      company: "HCP Gestão",
      description: "Full Stack Developer responsible for the end-to-end development and maintenance of web applications, working across both back-end and front-end layers. I developed user interfaces and implemented all application functionalities, ensuring complete system delivery. On the back end, I worked with PHP and Python using the Laravel framework to build robust APIs and systems, while on the front end I used JavaScript and Bootstrap to create intuitive and responsive interfaces. I also handled SQL-based database modeling, optimization, and management. A major professional challenge was independently designing and developing a complete training and course platform, which significantly enhanced my technical skills, problem-solving abilities, and understanding of full-cycle software development."
    },
    {
      id: 3,
      title: "Development Trainee",
      date: "January 2024 / January 2025",
      company: "HCP Gestão",
      description: "Started my professional journey as a Trainee developer in HCP Gestão, learning and growing in a collaborative environment."
    }
  ];

  const journeyDataPt = [
    {
      id: 1,
      actual: true,
      title: "Desenvolvedor Júnior",
      date: "Setembro 2025",
      company: "VerdanaTech",
      description: "Atuo como Desenvolvedor Full Stack, com experiência no desenvolvimento de aplicações web, mobile e desktop, entregando soluções completas com foco em performance, escalabilidade e experiência do usuário. No back-end, utilizo PHP e Laravel para construção de APIs robustas, seguras e bem estruturadas. No front-end, trabalho com JavaScript e Bootstrap, desenvolvendo interfaces modernas, responsivas e alinhadas às melhores práticas de usabilidade. Também desenvolvo aplicações mobile com Ionic e soluções desktop com Electron, ampliando a abrangência dos produtos e garantindo consistência entre diferentes plataformas. Tenho experiência na criação de plugins, páginas e serviços, participando de todo o ciclo de desenvolvimento desde a definição de requisitos até a entrega final sempre buscando gerar valor real para o negócio e otimizar processos. Sou orientado a resultados, com foco em código limpo, boas práticas e melhoria contínua, contribuindo para a construção de sistemas eficientes e escaláveis."
    },
    {
      id: 2,
      title: "Analista de Desenvolvimento Júnior",
      date: "Fevereiro 2025 / Setembro 2025",
      company: "HCP Gestão",
      description: "Desenvolvedor Full Stack responsável pelo desenvolvimento e manutenção de aplicações web, atuando tanto no back-end quanto no front-end. Desenvolvi interfaces de usuário e implementei todas as funcionalidades das aplicações, garantindo a entrega completa do sistema. No back-end, trabalhei com PHP e Python usando o framework Laravel para construir APIs robustas e sistemas, enquanto no front-end usei JavaScript e Bootstrap para criar interfaces intuitivas e responsivas. Também realizei modelagem, otimização e gerenciamento de banco de dados SQL. Um grande desafio profissional foi projetar e desenvolver de forma independente uma plataforma completa de treinamento e cursos, o que melhorou significativamente minhas habilidades técnicas, capacidade de resolução de problemas e compreensão do desenvolvimento de software de ciclo completo."
    },
    {
      id: 3,
      title: "Estagiário de Desenvolvimento",
      date: "Janeiro 2024 / Janeiro 2025",
      company: "HCP Gestão",
      description: "Comecei minha jornada profissional como estagiário na HCP Gestão, aprendendo e crescendo em um ambiente colaborativo."
    }
  ];

  const translations = {
    en: {
      title: "Professional Journey",
      loadMore: "Load More",
      company: "Company"
    },
    pt: {
      title: "Jornada Profissional",
      loadMore: "Carregar Mais",
      company: "Empresa"
    }
  };

  const journeyItems = lang === "en" ? journeyDataEn : journeyDataPt;
  const t = translations[lang] || translations.en;

  const [visibleItems, setVisibleItems] = useState(1);

  const loadMore = () => {
    setVisibleItems(prev => prev + 1);
  };

  return (
    <section className="journey" id="journey">
      <div className="row">
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-12 text-center">
          <div className="journey-img">
            <img src="img/professional-journey.png" alt="img-journey" />
          </div>
        </div>
        <div className="col-12 col-lg-8 col-xl-8 col-xxl-8 col-md-12 journey-inner">
          <h2 className="title-journey">{t.title}</h2>
          <div className="professional-journey-list">
            {journeyItems.slice(0, visibleItems).map(item => (
              <div
                key={item.id}
                className={
                  item.actual
                    ? "professional-journey-item-actual"
                    : "professional-journey-item"
                }
              >
                <h4>
                  {item.title} - <span>{item.date}</span>
                </h4>
                <h6>{t.company}: {item.company}</h6>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          {visibleItems < journeyItems.length && (
            <button
              className="btn btn-outline-light load-more-btn"
              onClick={loadMore}
            >
              {t.loadMore}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Journey;