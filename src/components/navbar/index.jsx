import { useState, useEffect } from "react";
import "./style.css";
import LanguageSelect from "../buttonLang/index.jsx";

function Navbar({ darkMode, handleChangeTheme, defaultLang, handleChangeLang }) {
  const translations = {
    en: {
      about: "About",
      capabilities: "Capabilities",
      journey: "Journey",
      projects: "Projects",
      contact: "Contact"
    },
    pt: {
      about: "Sobre",
      capabilities: "Habilidades",
      journey: "Jornada",
      projects: "Projetos",
      contact: "Contato"
    }
  };

  const t = translations[defaultLang] || translations.pt;

  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -0px 0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="divNav">
        <nav className="nav">
          <div className="logo">
            {/* <img src="" alt="logo" /> */}
          </div>

          <div className="nav-options">
            <ul>
              <li>
                <a
                  href="#about"
                  className={activeLink === "about" ? "active" : ""}
                >
                  {t.about}
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className={activeLink === "capabilities" ? "active" : ""}
                >
                  {t.capabilities}
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  className={activeLink === "journey" ? "active" : ""}
                >
                  {t.journey}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeLink === "projects" ? "active" : ""}
                >
                  {t.projects}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeLink === "contact" ? "active" : ""}
                >
                  {t.contact}
                </a>
              </li>
            </ul>

            <div className="div-button-theme-mode">
              <a
                type="button"
                className="btn"
                onClick={handleChangeTheme}
                aria-label="Change theme"
              >
                {darkMode ? (
                  <i className="bi bi-moon-fill"></i>
                ) : (
                  <i className="bi bi-brightness-high-fill"></i>
                )}
              </a>
            </div>
            <LanguageSelect lang={defaultLang} handleChangeLang={handleChangeLang} />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;