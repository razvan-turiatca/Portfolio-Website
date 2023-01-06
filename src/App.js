import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './containers/home/home'
import About from './containers/about/about'
import Contact from './containers/contact/contact'
import Portfolio from './containers/portfolio/portfolio'
import Resume from './containers/resume/resume'
import Skills from './containers/skills/skills'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      {/* particles js */}
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
