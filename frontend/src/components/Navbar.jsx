import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/instalaciones', label: 'Instalaciones' },
    { to: '/reservas', label: 'Reservas' },
    { to: '/contacto', label: 'Contacto' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 transition-colors border-b border-gray-100 dark:border-gray-800"
      style={{ boxShadow: '0 2px 16px rgba(0,97,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Nombre a la izquierda */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #0061FF, #1DB87B)' }}>
              <svg width="22" height="22" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="60" cy="40" rx="8" ry="12" fill="white" transform="rotate(-35 60 40)" opacity="0.9"/>
                <ellipse cx="100" cy="35" rx="8" ry="12" fill="white" transform="rotate(0 100 35)" opacity="0.95"/>
                <ellipse cx="140" cy="40" rx="8" ry="12" fill="white" transform="rotate(35 140 40)" opacity="0.9"/>
                <rect x="95" y="125" width="10" height="60" fill="white" rx="5"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[9px] font-bold tracking-[3px] text-blue-500 dark:text-blue-400 uppercase">Club Campestre</div>
              <div style={{ fontFamily: "Georgia, 'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, fontStyle: 'italic', color: isDark ? 'white' : '#0F172A', lineHeight: 1 }}>
                La Cueva
              </div>
            </div>
          </Link>

          {/* Menús al centro-izquierda en desktop */}
          <div className="hidden md:flex items-center gap-1 ml-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(to)
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Botón dark mode + hamburguesa */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  isActive(to)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
