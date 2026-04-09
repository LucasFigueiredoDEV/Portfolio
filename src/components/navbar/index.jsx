import { useState, useEffect } from "react";
import "./style.css";
import LanguageSelect from "../buttonLang/index.jsx";

function Navbar({ darkMode, handleChangeTheme, defaultLang, handleChangeLang }) {
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -45% 0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink([entry.target.id]);
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
            <img src="" alt="logo" />
          </div>

          <div className="nav-options">
            <ul>
              <li>
                <a
                  href="#about"
                  className={activeLink.includes("about") ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className={activeLink.includes("capabilities") ? "active" : ""}
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  className={activeLink.includes("journey") ? "active" : ""}
                >
                  Journey
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeLink.includes("projects") ? "active" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeLink.includes("contact") ? "active" : ""}
                >
                  Contact
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