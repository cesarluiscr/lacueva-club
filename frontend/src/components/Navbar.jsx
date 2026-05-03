import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'

const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E8C96B'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark } = useContext(ThemeContext)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/instalaciones', label: 'Instalaciones' },
    { to: '/reservas', label: 'Reservas' },
    { to: '/contacto', label: 'Contacto' },
  ]

  const isActive = (path) => location.pathname === path

  const navbarStyle = {
    background: '#0A0A0A',
    borderBottom: '1px solid rgba(201,168,76,0.2)',
    boxShadow: '0 2px 20px rgba(0,0,0,0.5)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  }

  const innerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    gap: '8px',
  }

  const getLinkStyle = (path) => ({
    padding: '6px 20px',
    fontSize: '0.82rem',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: isActive(path) ? GOLD_LIGHT : 'rgba(220,195,120,0.85)',
    borderBottom: isActive(path) ? `2px solid ${GOLD}` : '2px solid transparent',
    transition: 'all 0.25s ease',
    whiteSpace: 'nowrap',
    display: 'inline-block',
  })

  const goldLineStyle = {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)',
  }

  const hamburgerStyle = {
    padding: '8px',
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '4px',
    color: GOLD,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const mobileMenuStyle = {
    background: '#0d0d0d',
    borderTop: '1px solid rgba(201,168,76,0.15)',
    padding: '8px 0 16px',
  }

  const getMobileLinkStyle = (path) => ({
    display: 'block',
    padding: '12px 24px',
    fontSize: '0.82rem',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: isActive(path) ? GOLD_LIGHT : 'rgba(220,195,120,0.85)',
    borderLeft: isActive(path) ? `3px solid ${GOLD}` : '3px solid transparent',
    background: isActive(path) ? 'rgba(201,168,76,0.05)' : 'transparent',
    transition: 'all 0.2s',
  })

  return (
    <nav style={navbarStyle}>
      <div style={goldLineStyle} />
      <div style={innerStyle}>
        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="nav-desktop-wrap">
          <style>{`
            @media (max-width: 767px) { .nav-desktop-wrap { display: none !important; } }
            @media (min-width: 768px) { .nav-mobile-btn { display: none !important; } }
          `}</style>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={getLinkStyle(to)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Hamburger */}
        <button
          className="nav-mobile-btn"
          style={hamburgerStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div style={goldLineStyle} />

      {/* Mobile menu */}
      {isOpen && (
        <div style={mobileMenuStyle}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={getMobileLinkStyle(to)}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
