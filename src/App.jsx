import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/index.jsx'
import Asidebar from './components/asidebar/index.jsx'
import Aboutme from './components/content/about-me/index.jsx'
import Capatibilities from './components/content/capatibilities/index.jsx'
import Journey from './components/content/journey/index.jsx'
import Projects from './components/content/projects/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-layout">
      <Asidebar />
      <Navbar />
      <main className="main-content">
        <Aboutme />
        <Capatibilities />
        <Journey />
        <Projects />
      </main>
      <footer className='footer'>
        lulucasdev © 2024 Created by Lucas Figueiredo
      </footer>
    </div>
  )
}

export default App
