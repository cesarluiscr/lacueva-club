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
        <div className="flex justify-end items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 dark:text-gray-300">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/instalaciones" className="text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out relative group">
              Instalaciones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/reservas" className="text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out relative group">
              Reservas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/socios" className="text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out relative group">
              Portal Socios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
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
          </div>
        )}
      </div>
    </nav>
  )
}
