import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Projects({ lang }) { 

  const projectsEn = [
    {
      title: "Helpdesk System",
      description: "Ticket system developed with Laravel, including authentication, ticket management and administrative panel.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "#",
      demo: "#",
    },
    {
      title: "Users REST API",
      description: "RESTful API with JWT authentication, validations and MVC structure.",
      tech: ["Laravel", "JWT", "API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard with charts and data management integrated with backend.",
      tech: ["React", "Bootstrap", "Chart.js"],
      github: "#",
      demo: "#",
    },
  ];

  const projectsPt = [
    {
      title: "Sistema Helpdesk",
      description: "Sistema de chamados desenvolvido com Laravel, incluindo autenticação, gerenciamento de tickets e painel administrativo.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "#",
      demo: "#",
    },
    {
      title: "API REST de Usuários",
      description: "API RESTful com autenticação JWT, validações e estrutura MVC.",
      tech: ["Laravel", "JWT", "API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Administrativo",
      description: "Dashboard com gráficos e gerenciamento de dados integrado com backend.",
      tech: ["React", "Bootstrap", "Chart.js"],
      github: "#",
      demo: "#",
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
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>

                  <p className="card-text">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge tech-badge me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={project.github}
                      className="btn btn-outline-dark w-50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github" id="iconGithubProjects"></i> {t.code}
                    </a>

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