import { useState } from "react";

export default function ThemeButton() {
  const [dark, setDark] = useState(true);

  return (
    <button
      id="btn-change-theme"
      onClick={(e) => {
        e.preventDefault();
        setDark(!dark);
      }}
    >
      {dark ? (
        <i className="bi bi-moon-fill"></i>
      ) : (
        <i className="bi bi-brightness-high-fill"></i>
      )}
    </button>
  );
}
