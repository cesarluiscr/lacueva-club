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
    <div>
      <style>{`
        /* ─── Tipografía y base ─── */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');

        .gold { color: ${GOLD}; }
        .gold-bright { color: ${GOLD_LIGHT}; }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          min-height: 100vh;
          background: ${BLACK};
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Textura de red geométrica */
        .hero-mesh {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        /* Líneas diagonales del fondo */
        .hero-lines {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          background-image:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(201,168,76,0.3) 40px,
              rgba(201,168,76,0.3) 41px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(201,168,76,0.3) 40px,
              rgba(201,168,76,0.3) 41px
            );
        }

        /* Viñeta oscura en bordes */
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%);
        }

        /* Línea horizontal dorada top */
        .hero-line-top {
          position: absolute;
          top: 32px; left: 32px; right: 32px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          opacity: 0.6;
        }
        .hero-line-bottom {
          position: absolute;
          bottom: 32px; left: 32px; right: 32px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          opacity: 0.6;
        }

        /* Esquinas ornamentales SVG */
        .corner { position: absolute; width: 120px; height: 120px; opacity: 0.7; }
        .corner-tl { top: 16px; left: 16px; }
        .corner-tr { top: 16px; right: 16px; transform: scaleX(-1); }
        .corner-bl { bottom: 16px; left: 16px; transform: scaleY(-1); }
        .corner-br { bottom: 16px; right: 16px; transform: scale(-1); }

        /* Contenido central */
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 40px 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .hero-logo-img {
          height: 110px;
          width: auto;
          filter: drop-shadow(0 0 20px rgba(201,168,76,0.3));
          border-radius: 8px;
        }

        .hero-club-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 6px;
          color: ${GOLD_DIM};
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .hero-title {
          font-family: Georgia, 'Playfair Display', serif;
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-style: italic;
          font-weight: 700;
          color: ${GOLD_LIGHT};
          text-shadow: 0 0 40px rgba(201,168,76,0.3), 2px 2px 8px rgba(0,0,0,0.8);
          line-height: 1;
          margin: 0;
        }

        /* Línea separadora dorada central */
        .gold-divider {
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          margin: 28px auto;
          opacity: 0.8;
        }

        .hero-desc {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: rgba(255,255,255,0.75);
          line-height: 1.9;
          max-width: 600px;
          margin: 0 auto 40px;
          font-weight: 300;
          letter-spacing: 0.3px;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 36px;
          border-radius: 4px;
          background: linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 100%);
          color: ${BLACK};
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(201,168,76,0.35);
          transition: all 0.3s ease;
          border: none;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,168,76,0.5);
        }

        .btn-gold-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 36px;
          border-radius: 4px;
          border: 1px solid ${GOLD};
          color: ${GOLD};
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          background: rgba(201,168,76,0.05);
          transition: all 0.3s ease;
        }
        .btn-gold-outline:hover {
          background: rgba(201,168,76,0.12);
          transform: translateY(-2px);
        }

        /* ─── SECCIONES ─── */
        .section-dark {
          background: ${BLACK2};
          padding: 80px 24px;
        }
        .section-darker {
          background: ${BLACK};
          padding: 80px 24px;
        }
        .section-title-gold {
          font-family: Georgia, 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-style: italic;
          color: ${GOLD_LIGHT};
          margin-bottom: 12px;
          text-align: center;
        }
        .section-sub-gold {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          text-align: center;
          letter-spacing: 0.5px;
        }
        .gold-divider-sm {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          margin: 16px auto 0;
          opacity: 0.6;
        }

        /* Cards */
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
        .card-icon-wrap {
          width: 56px; height: 56px; border-radius: 8px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.25);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        /* Stats */
        .stat-box {
          padding: 36px 20px;
          text-align: center;
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 8px;
          background: rgba(201,168,76,0.03);
          transition: all 0.3s;
        }
        .stat-box:hover {
          background: rgba(201,168,76,0.07);
          border-color: rgba(201,168,76,0.35);
        }
        .stat-num {
          font-family: Georgia, serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: ${GOLD_LIGHT};
          margin-bottom: 8px;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 20px;
        }

        /* Noticias */
        .news-date {
          font-size: 0.72rem;
          font-weight: 700;
          color: ${GOLD};
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .news-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          margin: 10px 0 10px;
          line-height: 1.4;
        }
        .news-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .news-link {
          font-size: 0.82rem;
          font-weight: 700;
          color: ${GOLD};
          text-decoration: none;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(201,168,76,0.3);
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        .news-link:hover { border-color: ${GOLD}; }

        /* Responsive */
        @media (max-width: 640px) {
          .hero-logo-img { height: 80px; }
          .corner { width: 80px; height: 80px; }
          .hero-line-top, .hero-line-bottom { left: 16px; right: 16px; }
          .hero-btns { flex-direction: column; align-items: center; }
          .btn-gold, .btn-gold-outline { width: 100%; justify-content: center; }
          .section-dark, .section-darker { padding: 56px 16px; }
          .grid-3 { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 380px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero">
        <div className="hero-mesh" />
        <div className="hero-lines" />
        <div className="hero-vignette" />

        {/* Líneas horizontales */}
        <div className="hero-line-top" />
        <div className="hero-line-bottom" />

        {/* Esquinas ornamentales */}
        {['corner-tl','corner-tr','corner-bl','corner-br'].map(cls => (
          <svg key={cls} className={`corner ${cls}`} viewBox="0 0 120 120" fill="none">
            <path d="M10 10 L10 50 M10 10 L50 10" stroke={GOLD} strokeWidth="1.5" opacity="0.8"/>
            <path d="M10 10 Q40 10 40 40 Q40 70 70 70" stroke={GOLD} strokeWidth="1" opacity="0.4" fill="none"/>
            <circle cx="10" cy="10" r="3" fill={GOLD} opacity="0.9"/>
            <path d="M18 10 Q60 10 60 50 Q60 90 100 90" stroke={GOLD} strokeWidth="0.5" opacity="0.2" fill="none"/>
            {/* Flor ornamental */}
            <g transform="translate(55,55)" opacity="0.5">
              <circle cx="0" cy="0" r="3" fill={GOLD}/>
              <ellipse cx="0" cy="-10" rx="2.5" ry="6" fill={GOLD} opacity="0.6"/>
              <ellipse cx="0" cy="10" rx="2.5" ry="6" fill={GOLD} opacity="0.6"/>
              <ellipse cx="-10" cy="0" rx="6" ry="2.5" fill={GOLD} opacity="0.6"/>
              <ellipse cx="10" cy="0" rx="6" ry="2.5" fill={GOLD} opacity="0.6"/>
            </g>
          </svg>
        ))}

        {/* Contenido */}
        <div className="hero-content">
          <div className="hero-logo-wrap">
            <img src={logoElegante} alt="Logo Club Campestre La Cueva" className="hero-logo-img" onError={(e) => e.target.style.display='none'} />
            <div style={{ textAlign: 'left' }}>
              <div className="hero-club-label">Club Campestre</div>
              <h1 className="hero-title">La Cueva</h1>
            </div>
          </div>

          <div className="gold-divider" />

          <p className="hero-desc">
            Vive una experiencia única con nuestras instalaciones de clase mundial en Alajuela.
            Piscinas, canchas, gimnasio, restaurante y mucho más.
          </p>

          <div className="hero-btns">
            <Link to="/reservas" className="btn-gold">Reservar Ahora <ArrowRight size={16} /></Link>
            <Link to="/instalaciones" className="btn-gold-outline">Ver Instalaciones</Link>
          </div>
        </div>
      </section>

      {/* ══════════════ INSTALACIONES ══════════════ */}
      <section className="section-dark">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title-gold">Nuestras Instalaciones</h2>
          <p className="section-sub-gold">Bellísimas instalaciones para toda la familia</p>
          <div className="gold-divider-sm" />
          <div className="grid-3">
            {[
              { icon: Waves, title: 'Piscinas', description: 'Piscina olímpica de 50 metros y áreas de recreación acuática para toda la familia.' },
              { icon: Trophy, title: 'Canchas Deportivas', description: 'Fútbol, tenis y otras disciplinas con equipamiento de nivel profesional.' },
              { icon: Heart, title: 'Gimnasio', description: 'Equipos modernos y entrenadores certificados disponibles para nuestros socios.' },
            ].map((f, idx) => (
              <div key={idx} className="card-gold" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card-top-bar" />
                <div style={{ padding: '32px', textAlign: 'center' }}>
                  <div className="card-icon-wrap">
                    <f.icon size={26} color={GOLD} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/instalaciones" className="btn-gold">Ver Todas las Instalaciones <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="section-darker" style={{ textAlign: 'center', borderTop: `1px solid rgba(201,168,76,0.15)`, borderBottom: `1px solid rgba(201,168,76,0.15)` }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="gold-divider" />
          <h2 className="section-title-gold">¿Listo para disfrutar?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '36px', marginTop: '12px', lineHeight: 1.8 }}>
            Únete a nuestra comunidad y disfruta de las mejores instalaciones de Alajuela.
          </p>
          <Link to="/contacto" className="btn-gold">Contáctanos</Link>
          <div className="gold-divider" style={{ marginTop: '48px' }} />
        </div>
      </section>

      {/* ══════════════ NOTICIAS ══════════════ */}
      <section className="section-dark">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title-gold">Noticias y Eventos</h2>
          <p className="section-sub-gold">Mantente informado sobre lo que sucede en el club</p>
          <div className="gold-divider-sm" />
          <div className="grid-3" style={{ marginTop: '48px' }}>
            {[
              { date: 'Abril 2026', title: 'Inauguración del nuevo gimnasio', description: 'Equipos modernos y entrenadores certificados disponibles para todos nuestros visitantes.' },
              { date: 'Marzo 2026', title: 'Torneo de Tenis 2026', description: 'Participación de equipos de toda la región. Premiación para los ganadores.' },
              { date: 'Febrero 2026', title: 'Clases de natación para niños', description: 'Programa especial de verano con instructores certificados. Inscripciones abiertas.' },
            ].map((news, idx) => (
              <article key={idx} className="card-gold" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card-top-bar" />
                <div style={{ padding: '28px' }}>
                  <div className="news-date">{news.date}</div>
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-desc">{news.description}</p>
                  <a href="#" className="news-link">Leer más →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="section-darker">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="stats-grid">
            {[
              { number: '55', label: 'Años de Historia' },
              { number: '1000+', label: 'Visitantes Felices' },
              { number: '10', label: 'Instalaciones' },
              { number: '24/7', label: 'Acceso Club' },
            ].map((stat, idx) => (
              <div key={idx} className="stat-box" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="stat-num">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
