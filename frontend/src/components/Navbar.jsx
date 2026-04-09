import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="./images/logo-lacueva.jpg"
              alt="Club Campestre La Cueva"
              className="h-12 w-auto"
              onError={(e) => e.target.style.display = 'none'}
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-blue-600">Club Campestre</span>
              <span className="logo-text text-lg leading-tight">La Cueva</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            <Link to="/instalaciones" className="text-gray-700 hover:text-blue-600 transition">
              Instalaciones
            </Link>
            <Link to="/membresias" className="text-gray-700 hover:text-blue-600 transition">
              Membresías
            </Link>
            <Link to="/reservas" className="text-gray-700 hover:text-blue-600 transition">
              Reservas
            </Link>
            <Link to="/socios" className="text-gray-700 hover:text-blue-600 transition">
              Portal Socios
            </Link>
            <Link to="/tienda" className="btn-primary">
              Tienda
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/instalaciones"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Instalaciones
            </Link>
            <Link
              to="/membresias"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Membresías
            </Link>
            <Link
              to="/reservas"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Reservas
            </Link>
            <Link
              to="/socios"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Portal Socios
            </Link>
            <Link
              to="/tienda"
              className="block px-4 py-2 text-blue-600 font-bold hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Tienda
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
