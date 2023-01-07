import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Home from './containers/home/home'
import About from './containers/about/about'
import Contact from './containers/contact/contact'
import Portfolio from './containers/portfolio/portfolio'
import Resume from './containers/resume/resume'
import Skills from './containers/skills/skills'
import Navbar from './components/navbar/navbar'
import particlesConfig from './utilities/particlesConfig'

import './App.css'

function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }
  const location = useLocation()
  console.log(location)

  return (
    <div className="App">
      {/* particles js */}
      {location.pathname == '/' && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}
      <Navbar />
      {/* navbar component */}

      {/*main page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App
