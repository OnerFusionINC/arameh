import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Philosophy />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
