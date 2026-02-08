import { useState, useRef, useEffect } from "react";
import "./language-select.css";

export default function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectLanguage(lang) {
    setLanguage(lang);
    setOpen(false);
  }

  return (
    <div className="lang-select" ref={ref}>
      <a
        className="lang-button"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <img
          src={language === "en" ? "img/eua.png" : "img/brasil.png"}
          alt="Selected language"
        />
      </a>

      {open && (
        <ul className="lang-dropdown" style={{ gap: open ? "0px" : "0px" }}>
          <li onClick={() => selectLanguage("en")}>
            <img src="img/eua.png" alt="English" />
            <span>English</span>
          </li>
          <li onClick={() => selectLanguage("pt")}>
            <img src="img/brasil.png" alt="Português" />
            <span>Português</span>
          </li>
        </ul>
      )}
    </div>
  );
}
