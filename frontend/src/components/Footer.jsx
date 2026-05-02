import { Phone, MessageCircle, Mail, MapPin, Share2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const GOLD = '#C9A84C'
const GOLD_DIM = 'rgba(201,168,76,0.55)'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: '#0d0d0d',
      borderTop: '1px solid rgba(201,168,76,0.2)',
      color: '#e8e8e8',
    }}>
      {/* Gold line top */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '6px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '4px', color: GOLD_DIM, textTransform: 'uppercase' }}>
              Club Campestre
            </div>
            <div style={{
              fontFamily: "Georgia, 'Playfair Display', serif",
              fontSize: '2rem',
              fontWeight: 700,
              fontStyle: 'italic',
              color: GOLD,
              lineHeight: 1.1,
              marginBottom: '12px',
            }}>
              La Cueva
            </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
              55 años de excelencia en Alajuela, Costa Rica.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
              {[
                { href: 'https://facebook.com/lacuevaclub', label: 'Facebook', icon: <Share2 size={18} /> },
                { href: 'https://instagram.com/lacuevaclub', label: 'Instagram', icon: <Share2 size={18} /> },
                { href: 'https://github.com/cesarluiscr/lacueva-club', label: 'GitHub', icon: <ExternalLink size={18} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '36px', height: '36px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '6px',
                    color: GOLD_DIM,
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: GOLD_DIM, marginBottom: '18px' }}>
              Contacto
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: <Phone size={15} />, text: '2433-7171', href: 'tel:24337171' },
                { icon: <MessageCircle size={15} />, text: '7243-4203 (WhatsApp)', href: 'https://wa.me/50672434203' },
                { icon: <Mail size={15} />, text: 'info@lacuevasa.com', href: 'mailto:info@lacuevasa.com' },
                { icon: <MapPin size={15} />, text: 'Alajuela, Costa Rica', href: null },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: GOLD, opacity: 0.7, flexShrink: 0 }}>{item.icon}</span>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{item.text}</a>
                    : <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>{item.text}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: GOLD_DIM, marginBottom: '18px' }}>
              Enlaces
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { to: '/#/instalaciones', label: 'Instalaciones' },
                { to: '/#/reservas', label: 'Reservas' },
                { to: '/#/contacto', label: 'Contacto' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: GOLD_DIM, marginBottom: '18px' }}>
              Horarios
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>
              <span>Lunes - Viernes: 6:00 AM - 9:00 PM</span>
              <span>Sábado: 8:00 AM - 6:00 PM</span>
              <span>Domingo: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(201,168,76,0.12)',
          paddingTop: '24px',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.3)',
        }}>
          <p>&copy; {currentYear} Club Campestre La Cueva. Todos los derechos reservados.</p>
          <p style={{ marginTop: '8px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', marginRight: '16px' }}>Política de Privacidad</a>
            |
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', marginLeft: '16px' }}>Términos de Servicio</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
