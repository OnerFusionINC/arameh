import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/collection" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
