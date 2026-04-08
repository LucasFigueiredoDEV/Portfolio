import { useState, useRef, useEffect } from "react";
import "./language-select.css";

export default function LanguageSelect({ lang, handleChangeLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lang-select" ref={ref}>
      <a type="button" className="lang-button" onClick={() => setOpen(!open)}>
        <img
          src={lang === "en" ? "img/eua.png" : "img/brasil.png"}
          alt="Selected language"
        />
      </a>

      {open && (
        <ul className="lang-dropdown" style={{ gap: open ? "0px" : "0px" }}>
          <li onClick={() => { handleChangeLang("en"); setOpen(false); }}>
            <img src="img/eua.png" alt="English" />
            <span>English</span>
          </li>
          <li onClick={() => { handleChangeLang("pt"); setOpen(false); }}>
            <img src="img/brasil.png" alt="Português" />
            <span>Português</span>
          </li>
        </ul>
      )}
    </div>
  );
}
