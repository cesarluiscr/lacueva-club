import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/instalaciones', label: 'Instalaciones' },
    { to: '/reservas', label: 'Reservas' },
    { to: '/contacto', label: 'Contacto' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav style={{
      background: isDark
        ? 'linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 100%)'
        : 'linear-gradient(90deg, #0F172A 0%, #1e293b 100%)',
      borderBottom: '1px solid rgba(212,175,55,0.35)',
      boxShadow: '0 2px 20px rgba(212,175,55,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-8">

          {/* Menús a la izquierda */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={isActive(to) ? {
                  color: '#D4AF37',
                  borderBottom: '2px solid #D4AF37',
                  background: 'rgba(212,175,55,0.08)',
                  borderRadius: '6px 6px 0 0',
                  padding: '6px 18px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                } : {
                  color: 'rgba(255,255,255,0.75)',
                  borderBottom: '2px solid transparent',
                  padding: '6px 18px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (!isActive(to)) {
                    e.currentTarget.style.color = '#D4AF37'
                    e.currentTarget.style.background = 'rgba(212,175,55,0.08)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive(to)) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Línea dorada decorativa + botón dark mode */}
          <div className="hidden md:flex items-center gap-3">
            <div style={{
              width: '1px',
              height: '24px',
              background: 'linear-gradient(to bottom, transparent, #D4AF37, transparent)',
              opacity: 0.5
            }} />
            <button
              onClick={toggleTheme}
              style={{
                padding: '7px',
                borderRadius: '8px',
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.25)',
                color: '#D4AF37',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Hamburguesa móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{
              padding: '7px',
              borderRadius: '8px',
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.25)',
              color: '#D4AF37',
              cursor: 'pointer',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Línea dorada inferior decorativa */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          opacity: 0.3,
          marginTop: '-1px'
        }} />

        {/* Menú móvil */}
        {isOpen && (
          <div style={{
            borderTop: '1px solid rgba(212,175,55,0.2)',
            paddingBottom: '12px',
            paddingTop: '8px',
          }}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: 'block',
                  padding: '10px 16px',
                  color: isActive(to) ? '#D4AF37' : 'rgba(255,255,255,0.8)',
                  fontWeight: isActive(to) ? 700 : 500,
                  fontSize: '0.95rem',
                  borderLeft: isActive(to) ? '3px solid #D4AF37' : '3px solid transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div style={{ padding: '8px 16px' }}>
              <button
                onClick={toggleTheme}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  background: 'rgba(212,175,55,0.1)',
                  border: '1px solid rgba(212,175,55,0.25)',
                  color: '#D4AF37',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
                {isDark ? 'Modo claro' : 'Modo oscuro'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
