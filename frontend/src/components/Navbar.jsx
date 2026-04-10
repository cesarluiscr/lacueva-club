import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useContext(ThemeContext)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg
              width="48"
              height="48"
              viewBox="0 0 200 240"
              className="h-12 w-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="tree">
                {/* Árbol SVG embebido */}
                <ellipse cx="60" cy="40" rx="8" ry="12" fill="currentColor" transform="rotate(-35 60 40)" opacity="0.9"/>
                <ellipse cx="50" cy="50" rx="8" ry="12" fill="currentColor" transform="rotate(-50 50 50)" opacity="0.85"/>
                <ellipse cx="140" cy="40" rx="8" ry="12" fill="currentColor" transform="rotate(35 140 40)" opacity="0.9"/>
                <ellipse cx="150" cy="50" rx="8" ry="12" fill="currentColor" transform="rotate(50 150 50)" opacity="0.85"/>
                <ellipse cx="100" cy="35" rx="8" ry="12" fill="currentColor" transform="rotate(0 100 35)" opacity="0.95"/>
                <rect x="95" y="125" width="10" height="60" fill="currentColor" rx="5"/>
              </g>
            </svg>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-blue-600">Club Campestre</span>
              <span className="logo-text text-lg leading-tight">La Cueva</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 dark:text-gray-300">
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

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
