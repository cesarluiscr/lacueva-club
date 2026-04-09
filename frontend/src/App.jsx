import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Instalaciones from './pages/Instalaciones'
import Membresias from './pages/Membresias'
import Reservas from './pages/Reservas'
import SociosPortal from './pages/SociosPortal'
import Tienda from './pages/Tienda'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instalaciones" element={<Instalaciones />} />
            <Route path="/membresias" element={<Membresias />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/socios" element={<SociosPortal />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
