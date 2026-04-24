import { Link } from 'react-router-dom'
import { ArrowRight, Waves, Trophy, Heart } from 'lucide-react'
import logoElegante from '../assets/logo-lacueva-elegante.jpg'

const NAVY = '#0A1628'
const NAVY2 = '#0D1F3C'
const SILVER = '#C8D6E5'
const SILVER_BRIGHT = '#E8F0F8'
const SILVER_DIM = 'rgba(200,214,229,0.7)'

export default function Home() {
  return (
    <div style={{ background: '#f0f4f8' }}>

      {/* ── HERO ── */}
      <section style={{
        background: `linear-gradient(135deg, #060E1C 0%, ${NAVY} 45%, ${NAVY2} 100%)`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Patrón de puntos plateados */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill={SILVER} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Círculo decorativo plata */}
        <div style={{
          position: 'absolute', right: '-10%', top: '10%',
          width: '600px', height: '600px', borderRadius: '50%',
          border: `1px solid rgba(200,214,229,0.08)`,
          background: 'radial-gradient(circle, rgba(200,214,229,0.04) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', right: '5%', top: '20%',
          width: '350px', height: '350px', borderRadius: '50%',
          border: `1px solid rgba(200,214,229,0.06)`,
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          {/* Línea plata decorativa */}
          <div style={{
            width: '60px', height: '2px',
            background: `linear-gradient(90deg, ${SILVER}, transparent)`,
            marginBottom: '24px'
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '28px' }}>
            <img
              src={logoElegante}
              alt="Logo Club Campestre La Cueva"
              style={{ height: '100px', width: 'auto', filter: 'drop-shadow(0 4px 24px rgba(200,214,229,0.2))' }}
              onError={(e) => e.target.style.display = 'none'}
            />
            <div>
              <div style={{
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '4px',
                color: SILVER_DIM, textTransform: 'uppercase', marginBottom: '6px'
              }}>
                Club Campestre
              </div>
              <h1 style={{
                fontFamily: "Georgia, 'Playfair Display', serif",
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 700, fontStyle: 'italic',
                color: SILVER_BRIGHT,
                textShadow: `0 2px 20px rgba(200,214,229,0.2)`,
                lineHeight: 1.1, margin: 0,
              }}>
                La Cueva
              </h1>
            </div>
          </div>

          <p style={{
            fontSize: '1.15rem', color: SILVER_DIM,
            maxWidth: '540px', lineHeight: 1.8, marginBottom: '40px'
          }}>
            Vive una experiencia única con nuestras instalaciones de clase mundial en Alajuela.
            Piscinas, canchas, gimnasio, restaurante y mucho más.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/reservas" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '8px',
              background: `linear-gradient(135deg, ${SILVER} 0%, ${SILVER_BRIGHT} 100%)`,
              color: NAVY, fontWeight: 700, fontSize: '0.95rem',
              letterSpacing: '0.5px', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(200,214,229,0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Reservar Ahora <ArrowRight size={18} />
            </Link>
            <Link to="/instalaciones" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '8px',
              border: `1px solid rgba(200,214,229,0.3)`,
              color: SILVER, fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,214,229,0.08)'; e.currentTarget.style.borderColor = SILVER }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(200,214,229,0.3)' }}
            >
              Ver Instalaciones
            </Link>
          </div>
        </div>

        {/* Divisor inferior */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
          background: '#f0f4f8',
          clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)'
        }} />
      </section>

      {/* ── INSTALACIONES ── */}
      <section style={{ padding: '96px 24px', background: '#f0f4f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', width: '48px', height: '3px', background: `linear-gradient(90deg, ${NAVY}, ${SILVER})`, borderRadius: '2px', marginBottom: '20px' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: NAVY, marginBottom: '16px' }}>
              Nuestras Instalaciones
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568' }}>
              Bellísimas instalaciones para toda la familia
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              { icon: Waves, title: 'Piscinas', description: 'Piscina olímpica de 50 metros y áreas de recreación', image: '/lacueva-club/images/piscina.jpg' },
              { icon: Trophy, title: 'Canchas Deportivas', description: 'Fútbol, tenis y otras disciplinas con equipamiento profesional', image: '/lacueva-club/images/canchas.jpg' },
              { icon: Heart, title: 'Gimnasio', description: 'Equipos modernos y entrenadores certificados disponibles', image: '/lacueva-club/images/gimnasio.jpg' },
            ].map((f, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(10,22,40,0.08)',
                border: `1px solid rgba(200,214,229,0.4)`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 48px rgba(10,22,40,0.15)` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(10,22,40,0.08)' }}
              >
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${NAVY}, ${SILVER})` }} />
                <div style={{ padding: '32px', textAlign: 'center' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '16px',
                    background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY2} 100%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                    <f.icon size={28} color={SILVER} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: NAVY, marginBottom: '10px' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7 }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/instalaciones" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 36px', borderRadius: '8px',
              background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY2} 100%)`,
              color: SILVER_BRIGHT, fontWeight: 700, textDecoration: 'none',
              boxShadow: `0 8px 24px rgba(10,22,40,0.25)`,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Ver Todas las Instalaciones <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '96px 24px',
        background: `linear-gradient(135deg, #060E1C 0%, ${NAVY} 50%, ${NAVY2} 100%)`,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill={SILVER} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots2)" />
          </svg>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ width: '48px', height: '2px', background: `linear-gradient(90deg, transparent, ${SILVER}, transparent)`, margin: '0 auto 24px' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: SILVER_BRIGHT, marginBottom: '16px' }}>
            ¿Listo para disfrutar?
          </h2>
          <p style={{ fontSize: '1.1rem', color: SILVER_DIM, marginBottom: '40px', lineHeight: 1.8 }}>
            Únete a nuestra comunidad y disfruta de las mejores instalaciones.
          </p>
          <Link to="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '14px 40px', borderRadius: '8px',
            background: `linear-gradient(135deg, ${SILVER} 0%, ${SILVER_BRIGHT} 100%)`,
            color: NAVY, fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(200,214,229,0.15)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Contactar
          </Link>
        </div>
      </section>

      {/* ── NOTICIAS ── */}
      <section style={{ padding: '96px 24px', background: '#f0f4f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', width: '48px', height: '3px', background: `linear-gradient(90deg, ${NAVY}, ${SILVER})`, borderRadius: '2px', marginBottom: '20px' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: NAVY, marginBottom: '16px' }}>Noticias y Eventos</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568' }}>Mantente informado sobre lo que sucede en el club</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              { date: 'Abril 2026', title: 'Inauguración del nuevo gimnasio', description: 'Equipos modernos y entrenadores certificados disponibles para todos nuestros visitantes.' },
              { date: 'Marzo 2026', title: 'Torneo de Tenis 2026', description: 'Participación de equipos de toda la región. Premiación para los ganadores.' },
              { date: 'Febrero 2026', title: 'Clases de natación para niños', description: 'Programa especial de verano con instructores certificados. Inscripciones abiertas.' },
            ].map((news, idx) => (
              <article key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{
                background: 'white', borderRadius: '16px', overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(10,22,40,0.08)',
                border: `1px solid rgba(200,214,229,0.4)`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 48px rgba(10,22,40,0.15)` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(10,22,40,0.08)' }}
              >
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${NAVY}, ${SILVER})` }} />
                <div style={{ padding: '28px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: NAVY, letterSpacing: '1px', textTransform: 'uppercase' }}>{news.date}</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: NAVY, margin: '10px 0 10px' }}>{news.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>{news.description}</p>
                  <a href="#" style={{ fontSize: '0.88rem', fontWeight: 700, color: NAVY, textDecoration: 'none', borderBottom: `1px solid ${SILVER}`, paddingBottom: '2px' }}>
                    Leer más →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        padding: '80px 24px',
        background: `linear-gradient(135deg, #060E1C 0%, ${NAVY} 100%)`,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'center' }}>
            {[
              { number: '55', label: 'Años de Historia' },
              { number: '1000+', label: 'Visitantes Felices' },
              { number: '10', label: 'Instalaciones' },
              { number: '24/7', label: 'Acceso Club' },
            ].map((stat, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{
                padding: '40px 24px',
                borderRadius: '16px',
                background: 'rgba(200,214,229,0.05)',
                border: `1px solid rgba(200,214,229,0.12)`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,214,229,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(200,214,229,0.05)'}
              >
                <div style={{ fontSize: '3rem', fontWeight: 800, color: SILVER_BRIGHT, marginBottom: '8px' }}>{stat.number}</div>
                <div style={{ fontSize: '0.85rem', color: SILVER_DIM, letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
