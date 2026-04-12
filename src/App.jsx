import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/index.jsx'
import Asidebar from './components/asidebar/index.jsx'
import Aboutme from './components/content/about-me/index.jsx'
import Capabilities from './components/content/capatibilities/index.jsx'
import Journey from './components/content/journey/index.jsx'
import Projects from './components/content/projects/index.jsx'
import Contact from './components/content/contact/index.jsx'

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const [lang, setLang] = useState("en");

  function handleChangeLang(newLang) {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLang(savedLang);
  }, []);

  // Ao montar, carrega preferência salva
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  // Sempre que darkMode mudar, atualiza DOM e localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function handleChangeTheme(e) {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="app-layout">
      <Asidebar lang={lang} />
      <Navbar darkMode={darkMode} handleChangeTheme={handleChangeTheme} defaultLang={lang} handleChangeLang={handleChangeLang} />
      <main className="main-content">
        <Aboutme lang={lang} />
        <Capabilities lang={lang}/>
        <Journey lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className='footer'>
        lulucasdev © 2024 Created by Lucas Figueiredo
      </footer>
    </div>
  )
}

export default App
