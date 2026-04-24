import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'

const NAVY = '#0A1628'
const SILVER = '#C8D6E5'
const SILVER_BRIGHT = '#E8F0F8'
const SILVER_DIM = 'rgba(200,214,229,0.55)'
const SILVER_ACCENT = '#A8BECE'
const BORDER = 'rgba(200,214,229,0.18)'
const ACTIVE_BG = 'rgba(200,214,229,0.1)'

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
      background: `linear-gradient(90deg, #060E1C 0%, ${NAVY} 50%, #0D1F3C 100%)`,
      borderBottom: `1px solid ${BORDER}`,
      boxShadow: '0 4px 32px rgba(0,0,0,0.45)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      {/* Línea plata superior */}
      <div style={{
        height: '2px',
        background: `linear-gradient(90deg, transparent 0%, ${SILVER_ACCENT} 30%, ${SILVER_BRIGHT} 50%, ${SILVER_ACCENT} 70%, transparent 100%)`,
        opacity: 0.6,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '64px', gap: '40px' }}>

          {/* Menús desktop a la izquierda */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden-mobile">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  color: isActive(to) ? SILVER_BRIGHT : SILVER_DIM,
                  padding: '8px 20px',
                  borderRadius: '6px',
                  fontWeight: isActive(to) ? 700 : 500,
                  fontSize: '0.88rem',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  background: isActive(to) ? ACTIVE_BG : 'transparent',
                  borderBottom: isActive(to) ? `2px solid ${SILVER}` : '2px solid transparent',
                  transition: 'all 0.25s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  if (!isActive(to)) {
                    e.currentTarget.style.color = SILVER_BRIGHT
                    e.currentTarget.style.background = ACTIVE_BG
                    e.currentTarget.style.borderBottomColor = SILVER_DIM
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive(to)) {
                    e.currentTarget.style.color = SILVER_DIM
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderBottomColor = 'transparent'
                  }
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Derecha: separador + dark mode */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="hidden-mobile">
            <div style={{
              width: '1px',
              height: '28px',
              background: `linear-gradient(to bottom, transparent, ${SILVER_ACCENT}, transparent)`,
              opacity: 0.4,
            }} />
            <button
              onClick={toggleTheme}
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
              style={{
                padding: '8px',
                borderRadius: '8px',
                background: 'rgba(200,214,229,0.07)',
                border: `1px solid ${BORDER}`,
                color: SILVER,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,214,229,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(200,214,229,0.07)'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Hamburguesa móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="show-mobile"
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: 'rgba(200,214,229,0.07)',
              border: `1px solid ${BORDER}`,
              color: SILVER,
              cursor: 'pointer',
              display: 'none',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div style={{
            borderTop: `1px solid ${BORDER}`,
            paddingBottom: '16px',
            paddingTop: '8px',
          }}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: isActive(to) ? SILVER_BRIGHT : SILVER_DIM,
                  fontWeight: isActive(to) ? 700 : 500,
                  fontSize: '0.9rem',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderLeft: isActive(to) ? `3px solid ${SILVER}` : '3px solid transparent',
                  background: isActive(to) ? ACTIVE_BG : 'transparent',
                }}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div style={{ padding: '8px 20px', marginTop: '4px' }}>
              <button
                onClick={toggleTheme}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: 'rgba(200,214,229,0.07)',
                  border: `1px solid ${BORDER}`,
                  color: SILVER,
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
                {isDark ? 'Modo claro' : 'Modo oscuro'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Línea plata inferior */}
      <div style={{
        height: '1px',
        background: `linear-gradient(90deg, transparent 0%, ${SILVER_ACCENT} 30%, ${SILVER_BRIGHT} 50%, ${SILVER_ACCENT} 70%, transparent 100%)`,
        opacity: 0.25,
      }} />

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
