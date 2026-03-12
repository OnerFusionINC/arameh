import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Philosophy from './components/Philosophy'
import Footer from './components/Footer'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app-container">
      <Navbar />
      <Philosophy />
      <Footer />
    </div>
  </StrictMode>,
)
