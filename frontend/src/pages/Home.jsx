// v3
import { Link } from 'react-router-dom'
import { ArrowRight, Waves, Trophy, Heart } from 'lucide-react'
import logoElegante from '../assets/logo-lacueva-elegante.jpg'

const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E8C96B'
const GOLD_DIM = 'rgba(201,168,76,0.6)'
const BLACK = '#0A0A0A'
const BLACK2 = '#111111'
const DARK = '#1A1A1A'

export default function Home() {
  return (
    <div style={{ background: BLACK, color: '#e8e8e8' }}>
      <style>{`
        /* ─── Grid mesh background ─── */
        .hero {
          position: relative;
          min-height: 100vh;
          background: ${BLACK};
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-mesh {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }
        .hero-lines {
          position: absolute; inset: 0; opacity: 0.12;
          background-image:
            repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.3) 40px, rgba(201,168,76,0.3) 41px),
            repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,168,76,0.3) 40px, rgba(201,168,76,0.3) 41px);
        }
        .hero-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%);
        }
        .hero-line-h {
          position: absolute; left: 32px; right: 32px; height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          opacity: 0.6;
        }
        .hero-line-top { top: 32px; }
        .hero-line-bottom { bottom: 32px; }
        .corner { position: absolute; width: 100px; height: 100px; opacity: 0.6; }
        .corner-tl { top: 16px; left: 16px; }
        .corner-tr { top: 16px; right: 16px; transform: scaleX(-1); }
        .corner-bl { bottom: 16px; left: 16px; transform: scaleY(-1); }
        .corner-br { bottom: 16px; right: 16px; transform: scale(-1); }

        /* ─── Cards ─── */
        .card-gold {
          background: linear-gradient(145deg, #161616, #1e1e1e);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.35s ease;
        }
        .card-gold:hover {
          border-color: rgba(201,168,76,0.5);
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5), 0 0 20px rgba(201,168,76,0.1);
        }
        .card-top-bar {
          height: 2px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          opacity: 0.7;
        }

        /* ─── Stats ─── */
        .stat-box {
          padding: 36px 20px; text-align: center;
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 8px;
          background: rgba(201,168,76,0.03);
          transition: all 0.3s;
        }
        .stat-box:hover {
          background: rgba(201,168,76,0.07);
          border-color: rgba(201,168,76,0.35);
        }

        /* ─── Responsive ─── */
        @media (max-width: 640px) {
          .hero-line-h { left: 12px; right: 12px; }
          .corner { width: 64px; height: 64px; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a { width: 100% !important; justify-content: center !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .logo-stack { flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .logo-stack > div { text-align: center !important; }
        }
        @media (max-width: 380px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <section className="hero">
        <div className="hero-mesh" />
        <div className="hero-lines" />
        <div className="hero-vignette" />
        <div className="hero-line-h hero-line-top" />
        <div className="hero-line-h hero-line-bottom" />

        {['corner-tl','corner-tr','corner-bl','corner-br'].map(cls => (
          <svg key={cls} className={`corner ${cls}`} viewBox="0 0 120 120" fill="none">
            <path d="M10 10 L10 50 M10 10 L50 10" stroke={GOLD} strokeWidth="1.5" opacity="0.8"/>
            <path d="M10 10 Q40 10 40 40 Q40 70 70 70" stroke={GOLD} strokeWidth="1" opacity="0.4" fill="none"/>
            <circle cx="10" cy="10" r="3" fill={GOLD} opacity="0.9"/>
            <g transform="translate(55,55)" opacity="0.5">
              <circle cx="0" cy="0" r="3" fill={GOLD}/>
              <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill={GOLD} opacity="0.6"/>
              <ellipse cx="0" cy="10" rx="2.5" ry="6" fill={GOLD} opacity="0.6"/>
              <ellipse cx="-10" cy="0" rx="6" ry="2.5" fill={GOLD} opacity="0.6"/>
              <ellipse cx="10" cy="0" rx="6" ry="2.5" fill={GOLD} opacity="0.6"/>
            </g>
          </svg>
        ))}

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '40px 24px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
          {/* Logo + título */}
          <div className="logo-stack" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <img
              src={logoElegante}
              alt="Logo Club Campestre La Cueva"
              style={{ height: '100px', width: 'auto', filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.3))', borderRadius: '8px' }}
              onError={(e) => e.target.style.display='none'}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '6px', color: GOLD_DIM,
                textTransform: 'uppercase', marginBottom: '6px',
              }}>
                Club Campestre
              </div>
              <h1 style={{
                fontFamily: "Georgia, 'Playfair Display', serif",
                fontSize: 'clamp(3rem, 10vw, 5.5rem)',
                fontStyle: 'italic', fontWeight: 700,
                color: GOLD,
                textShadow: `0 0 60px rgba(201,168,76,0.5), 0 0 20px rgba(201,168,76,0.25), 2px 2px 8px rgba(0,0,0,0.8)`,
                lineHeight: 1, margin: 0,
              }}>
                La Cueva
              </h1>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '200px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: '24px auto', opacity: 0.8 }} />

          <p style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
            color: 'rgba(255,255,255,0.7)', lineHeight: 1.9,
            maxWidth: '580px', margin: '0 auto 36px',
            fontWeight: 300, letterSpacing: '0.3px',
          }}>
            Vive una experiencia única con nuestras instalaciones de clase mundial en Alajuela.
            Piscinas, canchas, gimnasio, restaurante y mucho más.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/reservas" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '4px',
              background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 100%)`,
              color: BLACK, fontWeight: 700, fontSize: '0.88rem',
              letterSpacing: '1.5px', textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
              transition: 'all 0.3s ease',
            }}>
              Reservar Ahora <ArrowRight size={16} />
            </Link>
            <Link to="/instalaciones" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '4px',
              border: `2px solid ${GOLD}`,
              color: GOLD_LIGHT, fontWeight: 700, fontSize: '0.88rem',
              letterSpacing: '1.5px', textTransform: 'uppercase',
              textDecoration: 'none',
              background: 'rgba(201,168,76,0.1)',
              transition: 'all 0.3s ease',
            }}>
              Ver Instalaciones
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ INSTALACIONES ══════════ */}
      <section style={{ background: BLACK2, padding: 'clamp(48px,8vw,80px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "Georgia,'Playfair Display',serif", fontSize: 'clamp(1.5rem,4vw,2.4rem)', fontStyle: 'italic', color: GOLD_LIGHT, marginBottom: '8px', textAlign: 'center' }}>
            Nuestras Instalaciones
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>Bellísimas instalaciones para toda la familia</p>
          <div style={{ width: '80px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: '16px auto 0', opacity: 0.6 }} />

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[
              { icon: Waves, title: 'Piscinas', description: 'Piscina olímpica de 50 metros y áreas de recreación acuática para toda la familia.' },
              { icon: Trophy, title: 'Canchas Deportivas', description: 'Fútbol, tenis y otras disciplinas con equipamiento de nivel profesional.' },
              { icon: Heart, title: 'Gimnasio', description: 'Equipos modernos y entrenadores certificados disponibles para nuestros socios.' },
            ].map((f, idx) => (
              <div key={idx} className="card-gold" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card-top-bar" />
                <div style={{ padding: '32px', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '8px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                    <f.icon size={26} color={GOLD} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/instalaciones" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '4px',
              background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 100%)`,
              color: BLACK, fontWeight: 700, fontSize: '0.88rem',
              letterSpacing: '1.5px', textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
            }}>
              Ver Todas las Instalaciones <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ background: BLACK, padding: 'clamp(48px,8vw,80px) 24px', textAlign: 'center', borderTop: `1px solid rgba(201,168,76,0.15)`, borderBottom: `1px solid rgba(201,168,76,0.15)` }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ width: '200px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: '0 auto 32px', opacity: 0.8 }} />
          <h2 style={{ fontFamily: "Georgia,'Playfair Display',serif", fontSize: 'clamp(1.5rem,4vw,2.4rem)', fontStyle: 'italic', color: GOLD_LIGHT, marginBottom: '12px' }}>
            ¿Listo para disfrutar?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '36px', marginTop: '12px', lineHeight: 1.8 }}>
            Únete a nuestra comunidad y disfruta de las mejores instalaciones de Alajuela.
          </p>
          <Link to="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '14px 32px', borderRadius: '4px',
            background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 100%)`,
            color: BLACK, fontWeight: 700, fontSize: '0.88rem',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
          }}>
            Contáctanos
          </Link>
          <div style={{ width: '200px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: '48px auto 0', opacity: 0.8 }} />
        </div>
      </section>

      {/* ══════════ NOTICIAS ══════════ */}
      <section style={{ background: BLACK2, padding: 'clamp(48px,8vw,80px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "Georgia,'Playfair Display',serif", fontSize: 'clamp(1.5rem,4vw,2.4rem)', fontStyle: 'italic', color: GOLD_LIGHT, marginBottom: '8px', textAlign: 'center' }}>
            Noticias y Eventos
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>Mantente informado sobre lo que sucede en el club</p>
          <div style={{ width: '80px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: '16px auto 0', opacity: 0.6 }} />

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[
              { date: 'Abril 2026', title: 'Inauguración del nuevo gimnasio', description: 'Equipos modernos y entrenadores certificados disponibles para todos nuestros visitantes.' },
              { date: 'Marzo 2026', title: 'Torneo de Tenis 2026', description: 'Participación de equipos de toda la región. Premiación para los ganadores.' },
              { date: 'Febrero 2026', title: 'Clases de natación para niños', description: 'Programa especial de verano con instructores certificados. Inscripciones abiertas.' },
            ].map((news, idx) => (
              <article key={idx} className="card-gold" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card-top-bar" />
                <div style={{ padding: '28px' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: GOLD, letterSpacing: '2px', textTransform: 'uppercase' }}>{news.date}</div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '10px 0', lineHeight: 1.4 }}>{news.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '20px' }}>{news.description}</p>
                  <a href="#" style={{ fontSize: '0.82rem', fontWeight: 700, color: GOLD, textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '2px' }}>Leer más →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section style={{ background: BLACK, padding: 'clamp(48px,8vw,80px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { number: '55', label: 'Años de Historia' },
              { number: '1000+', label: 'Visitantes Felices' },
              { number: '10', label: 'Instalaciones' },
              { number: '24/7', label: 'Acceso Club' },
            ].map((stat, idx) => (
              <div key={idx} className="stat-box" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: GOLD_LIGHT, marginBottom: '8px', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
