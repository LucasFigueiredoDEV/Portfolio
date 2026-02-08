import { useState } from "react";
import "./style.css";
import LanguageSelect from "../buttonLang/index.jsx";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  function handleChangeTheme(e) {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="navbar-container">
      <div className="divNav">
        <nav className="nav">
          <div className="logo">
            <img src="" alt="logo" />
          </div>

          <div className="nav-options">
            <ul>
              <li><a href="#about-me">About</a></li>
              <li><a href="#capatibilities">Capatibilities</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
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
            <LanguageSelect />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;