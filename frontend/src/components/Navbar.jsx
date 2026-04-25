import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'

const GOLD = '#C9A84C'
const GOLD_DIM = 'rgba(201,168,76,0.55)'

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

  return (
    <>
      <style>{`
        .navbar {
          background: #0A0A0A;
          border-bottom: 1px solid rgba(201,168,76,0.2);
          box-shadow: 0 2px 20px rgba(0,0,0,0.5);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          height: 60px;
          gap: 8px;
        }
        .nav-link {
          padding: 6px 20px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(201,168,76,0.55);
          border-bottom: 2px solid transparent;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: ${GOLD};
          border-bottom-color: rgba(201,168,76,0.4);
        }
        .nav-link.active {
          color: ${GOLD};
          border-bottom-color: ${GOLD};
        }
        .navbar-spacer { flex: 1; }
        .navbar-gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent);
        }
        .hamburger {
          display: none;
          padding: 8px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
          color: ${GOLD};
          cursor: pointer;
        }
        .mobile-menu {
          background: #0d0d0d;
          border-top: 1px solid rgba(201,168,76,0.15);
          padding: 8px 0 16px;
        }
        .mobile-link {
          display: block;
          padding: 12px 24px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(201,168,76,0.55);
          border-left: 3px solid transparent;
          transition: all 0.2s;
        }
        .mobile-link:hover, .mobile-link.active {
          color: ${GOLD};
          border-left-color: ${GOLD};
          background: rgba(201,168,76,0.05);
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 768px) {
          .hamburger { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-gold-line" />
        <div className="navbar-inner">
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={`nav-link ${isActive(to) ? 'active' : ''}`}>
                {label}
              </Link>
            ))}
          </div>
          <div className="navbar-spacer" />
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className="navbar-gold-line" />

        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={`mobile-link ${isActive(to) ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
