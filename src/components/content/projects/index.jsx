import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Projects({ lang }) { 

  const projectsEn = [
    {
      title: "Portfolio Website",
      description: "Portfolio built with React to showcase my projects, skills, and experience, focusing on responsive design and best development practices.",
      tech: ["React", "JavaScript", "Bootstrap"],
      github: "https://github.com/LucasFigueiredoDEV/Portfolio",
      demo: "https://lulucasdev.com/",
    },
    {
      title: "HCP Management Selection Process",
      description: "Website where all selection processes for HCP units are carried out.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      demo: "https://hcpgestao.org.br/processo_seletivo_hcpgestao/public/",
    },
    {
      title: "Transparency Portal - HCP Management",
      description: "Website where all information regarding HCP units can be found.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      demo: "https://hcpgestao-portal.hcpgestao.org.br/",
    },
    {
      title: "HCP Website",
      description: "HCP (Pernambuco Cancer Hospital) website.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      demo: "https://hcpgestao.org.br/",
    },
    {
      title: "All My Links",
      description: "Web page where contain all my social medias links.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/LucasFigueiredoDEV/AllMyLinks",
      demo: "https://lucasfigueiredodev.github.io/AllMyLinks/",
    },
  ];

  const projectsPt = [
    {
      title: "Site do portfólio",
      description: "Portfólio desenvolvido em React para apresentar meus projetos, habilidades e experiências, com foco em design responsivo e boas práticas de desenvolvimento.",
      tech: ["React", "JavaScript", "Bootstrap"],
      github: "https://github.com/LucasFigueiredoDEV/Portfolio",
      demo: "https://lulucasdev.com/",
    },
    {
      title: "Processo Seletivo HCP Gestão",
      description: "Página Web onde são realizadas todas os processos seletivos das unidades HCP.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      demo: "https://hcpgestao.org.br/processo_seletivo_hcpgestao/public/",
    },
    {
      title: "Portal da Transparência - HCP Gestão",
      description: "Página web onde são encontradas todas as informações referentes às unidades HCP.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      demo: "https://hcpgestao-portal.hcpgestao.org.br/",
    },
    {
      title: "Site HCP Gestão",
      description: "Página web do HCP (Hospital de Câncer de Pernambuco).",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      demo: "https://hcpgestao.org.br/",
    },
    {
      title: "Todos os Meus Links",
      description: "Página Web onde Contém todos os links das minhas midias sociais.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/LucasFigueiredoDEV/AllMyLinks",
      demo: "https://lucasfigueiredodev.github.io/AllMyLinks/",
    },
  ];

  const translations = {
    en: {
      title: "My Projects",
      code: "Code",
      demo: "Demo"
    },
    pt: {
      title: "Meus Projetos",
      code: "Código",
      demo: "Demo"
    }
  };

  const projects = lang === "en" ? projectsEn : projectsPt;
  const t = translations[lang] || translations.en;

  return (
    <section className="projects py-5" id="projects">
      <div className="container">
        <h2 className="text-center mb-5 title-projects">
          {t.title}
        </h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card project-card h-100">
                {index === 0 && (
                  <i
                    className="bi bi-star-fill position-absolute top-0 end-0 m-3 text-warning"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>

                  <p className="card-text">
                    {project.description}
                  </p>

                  <div className="mt-auto mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge tech-badge me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`d-flex gap-2 ${!project.github ? "justify-content-left" : ""}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn btn-outline-dark w-50"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-github" id="iconGithubProjects"></i> {t.code}
                      </a>
                    )}

                    <a
                      href={project.demo}
                      className="btn btn-dark w-50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right" id="iconDemoProjects"></i> {t.demo}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;