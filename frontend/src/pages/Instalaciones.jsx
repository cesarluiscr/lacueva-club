import { useState } from 'react'
import { MapPin, Clock, Users, X, ChevronLeft, ChevronRight } from 'lucide-react'
import CalendarBooking from '../components/CalendarBooking'

// Use public folder for better GitHub Pages compatibility
const gimnasio1 = '/lacueva-club/images/gimnasio1.jpeg'
const gimnasio2 = '/lacueva-club/images/gimnasio2.jpeg'
const gimnasio3 = '/lacueva-club/images/gimnasio3.jpeg'
const gimnasio4 = '/lacueva-club/images/gimnasio4.jpeg'
const gimnasio5 = '/lacueva-club/images/gimnasio5.jpeg'

const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E8C96B'
const GOLD_DIM = 'rgba(201,168,76,0.55)'
const BLACK = '#0A0A0A'
const DARK = '#161616'

export default function Instalaciones() {
  const [selectedInstalacion, setSelectedInstalacion] = useState(null)
  const [galeryIndex, setGaleryIndex] = useState(0)

  const instalaciones = [
    {
      id: 1,
      nombre: 'Piscina Olímpica',
      descripcion: 'Piscina de competencia con 50 metros de largo',
      imagen: 'https://via.placeholder.com/400x300?text=Piscina+Olimpica',
      capacidad: 300,
      horarios: '6:00 AM - 6:00 PM',
      servicios: ['Clases de natación', 'Salvavidas', 'Vestuarios'],
      tarifa_visitante: 15.00
    },
    {
      id: 2,
      nombre: 'Canchas de Fútbol',
      descripcion: 'Dos canchas de césped sintético de calidad profesional',
      imagen: 'https://via.placeholder.com/400x300?text=Canchas+Futbol',
      capacidad: 40,
      horarios: '7:00 AM - 9:00 PM',
      servicios: ['Vestuarios', 'Agua potable', 'Iluminación'],
      tarifa_visitante: 25.00
    },
    {
      id: 3,
      nombre: 'Canchas de Tenis',
      descripcion: 'Cuatro canchas con iluminación nocturna',
      imagen: 'https://via.placeholder.com/400x300?text=Canchas+Tenis',
      capacidad: 8,
      horarios: '7:00 AM - 9:00 PM',
      servicios: ['Lecciones', 'Vestuarios', 'Almacén'],
      tarifa_visitante: 20.00
    },
    {
      id: 4,
      nombre: 'Gimnasio',
      descripcion: 'Equipos modernos con entrenadores certificados',
      imagen: gimnasio1,
      imagenes: [gimnasio1, gimnasio2, gimnasio3, gimnasio4, gimnasio5],
      capacidad: 50,
      horarios: '6:00 AM - 9:00 PM',
      servicios: ['Entrenadores certificados', 'Clases grupales', 'Duchas', 'Áreas de ejercicio variadas'],
      tarifa_visitante: 10.00
    },
    {
      id: 5,
      nombre: 'Salones para Eventos',
      descripcion: 'Espacios versátiles para conferencias, bodas y eventos',
      imagen: 'https://via.placeholder.com/400x300?text=Salones',
      capacidad: 200,
      horarios: 'Flexible',
      servicios: ['Catering', 'Equipamiento', 'Estacionamiento'],
      tarifa_visitante: 0.00
    },
    {
      id: 6,
      nombre: 'Restaurante',
      descripcion: 'Restaurante con vista a las instalaciones',
      imagen: 'https://via.placeholder.com/400x300?text=Restaurante',
      capacidad: 100,
      horarios: '11:00 AM - 9:00 PM',
      servicios: ['Menú variado', 'Bebidas', 'Postres'],
      tarifa_visitante: 0.00
    }
  ]

  return (
    <>
      <style>{`
        .inst-page {
          background: ${BLACK};
          min-height: 100vh;
          color: #e8e8e8;
        }

        /* ── HERO ── */
        .inst-hero {
          position: relative;
          background: ${BLACK};
          padding: 72px 24px 56px;
          text-align: center;
          overflow: hidden;
        }
        .inst-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px);
        }
        .inst-hero-inner {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }
        .inst-hero-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          border: 1px solid rgba(201,168,76,0.25);
          padding: 5px 18px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .inst-hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-style: italic;
        }
        .inst-hero-title span { color: ${GOLD}; }
        .inst-hero-line {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          margin: 16px auto;
        }
        .inst-hero-sub {
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          max-width: 480px;
          margin: 0 auto;
        }

        /* ── GRID ── */
        .inst-section {
          padding: 64px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .inst-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 28px;
        }
        .inst-card {
          background: ${DARK};
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .inst-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${GOLD_DIM}, transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .inst-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201,168,76,0.45);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(201,168,76,0.08);
        }
        .inst-card:hover::before { opacity: 1; }
        .inst-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          filter: brightness(0.85) saturate(0.7);
          transition: filter 0.3s;
        }
        .inst-card:hover img { filter: brightness(0.95) saturate(0.9); }
        .inst-card-body { padding: 20px 22px 22px; }
        .inst-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }
        .inst-card-desc {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          margin-bottom: 14px;
          line-height: 1.5;
        }
        .inst-card-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.8rem;
          color: ${GOLD_DIM};
        }
        .inst-card-meta-row {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        /* ── MODAL ── */
        .inst-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.82);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 16px;
        }
        .inst-modal {
          background: #111111;
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 14px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(201,168,76,0.06);
          position: relative;
        }
        .inst-modal-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          filter: brightness(0.8) saturate(0.6);
        }
        .inst-modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(0,0,0,0.7);
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${GOLD};
          cursor: pointer;
          transition: background 0.2s;
          z-index: 2;
        }
        .inst-modal-close:hover { background: rgba(201,168,76,0.15); }
        .inst-modal-body { padding: 28px; }
        .inst-modal-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 6px;
        }
        .inst-modal-desc {
          color: rgba(255,255,255,0.5);
          font-size: 0.95rem;
          margin-bottom: 22px;
          line-height: 1.6;
        }
        .inst-modal-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 24px;
        }
        .inst-stat-box {
          background: rgba(201,168,76,0.06);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 8px;
          padding: 16px;
        }
        .inst-stat-label {
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          margin-bottom: 6px;
        }
        .inst-stat-value {
          font-size: 1.6rem;
          font-weight: 700;
          color: ${GOLD};
        }
        .inst-stat-unit {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
          margin-top: 2px;
        }
        .inst-modal-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          margin-bottom: 10px;
          margin-top: 20px;
        }
        .inst-modal-horario {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
        }
        .inst-modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .inst-tag {
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.22);
          color: ${GOLD};
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .inst-modal-divider {
          border: none;
          border-top: 1px solid rgba(201,168,76,0.15);
          margin: 24px 0;
        }
        .inst-modal-btn {
          width: 100%;
          padding: 13px;
          background: transparent;
          border: 1px solid rgba(201,168,76,0.35);
          color: ${GOLD};
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 16px;
        }
        .inst-modal-btn:hover {
          background: rgba(201,168,76,0.08);
          border-color: ${GOLD};
        }

        /* ── MAP SECTION ── */
        .inst-map-section {
          padding: 64px 24px;
          background: #0d0d0d;
          border-top: 1px solid rgba(201,168,76,0.1);
        }
        .inst-map-inner {
          max-width: 1000px;
          margin: 0 auto;
        }
        .inst-map-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 8px;
        }
        .inst-map-title span { color: ${GOLD}; }
        .inst-map-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          margin: 0 auto 32px;
        }
        .inst-map-frame {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(201,168,76,0.2);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        /* scrollbar */
        .inst-modal::-webkit-scrollbar { width: 5px; }
        .inst-modal::-webkit-scrollbar-track { background: #111; }
        .inst-modal::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 3px; }
      `}</style>

      <div className="inst-page">
        {/* Hero */}
        <section className="inst-hero">
          <div className="inst-hero-inner">
            <span className="inst-hero-eyebrow">Club Campestre La Cueva</span>
            <h1 className="inst-hero-title">Nuestras <span>Instalaciones</span></h1>
            <div className="inst-hero-line" />
            <p className="inst-hero-sub">Descubre todas las comodidades que tenemos para ti</p>
          </div>
        </section>

        {/* Grid */}
        <section className="inst-section">
          <div className="inst-grid">
            {instalaciones.map((inst) => (
              <div
                key={inst.id}
                className="inst-card"
                onClick={() => setSelectedInstalacion(inst)}
              >
                <img
                  src={inst.imagen}
                  alt={`${inst.nombre} - Club Campestre La Cueva`}
                  loading="lazy"
                />
                <div className="inst-card-body">
                  <h3 className="inst-card-title">{inst.nombre}</h3>
                  <p className="inst-card-desc">{inst.descripcion}</p>
                  <div className="inst-card-meta">
                    <div className="inst-card-meta-row">
                      <Users size={14} />
                      Capacidad: {inst.capacidad} personas
                    </div>
                    <div className="inst-card-meta-row">
                      <Clock size={14} />
                      {inst.horarios}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedInstalacion && (
          <div
            className="inst-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${selectedInstalacion.id}`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedInstalacion(null)
                setGaleryIndex(0)
              }
            }}
          >
            <div className="inst-modal">
              {/* Gallery */}
              <div style={{ position: 'relative' }}>
                <img
                  src={selectedInstalacion.imagenes ? selectedInstalacion.imagenes[galeryIndex] : selectedInstalacion.imagen}
                  alt={`Imagen de ${selectedInstalacion.nombre}`}
                  className="inst-modal-img"
                  loading="lazy"
                />
                {selectedInstalacion.imagenes && selectedInstalacion.imagenes.length > 1 && (
                  <>
                    <button
                      onClick={() => setGaleryIndex((prev) => (prev === 0 ? selectedInstalacion.imagenes.length - 1 : prev - 1))}
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.6)',
                        border: '1px solid rgba(201,168,76,0.3)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#C9A84C',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        zIndex: 1
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.8)'}
                      onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.6)'}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setGaleryIndex((prev) => (prev === selectedInstalacion.imagenes.length - 1 ? 0 : prev + 1))}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.6)',
                        border: '1px solid rgba(201,168,76,0.3)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#C9A84C',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        zIndex: 1
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.8)'}
                      onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.6)'}
                    >
                      <ChevronRight size={18} />
                    </button>
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(0,0,0,0.6)',
                      color: '#C9A84C',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      border: '1px solid rgba(201,168,76,0.3)',
                      zIndex: 1
                    }}>
                      {galeryIndex + 1} / {selectedInstalacion.imagenes.length}
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedInstalacion(null)
                  setGaleryIndex(0)
                }}
                className="inst-modal-close"
                aria-label="Cerrar"
              >
                <X size={16} />
              </button>

              <div className="inst-modal-body">
                <h2 id={`modal-title-${selectedInstalacion.id}`} className="inst-modal-title">
                  {selectedInstalacion.nombre}
                </h2>
                <p className="inst-modal-desc">{selectedInstalacion.descripcion}</p>

                <div className="inst-modal-stats">
                  <div className="inst-stat-box">
                    <div className="inst-stat-label">Capacidad</div>
                    <div className="inst-stat-value">{selectedInstalacion.capacidad}</div>
                    <div className="inst-stat-unit">personas</div>
                  </div>
                  <div className="inst-stat-box">
                    <div className="inst-stat-label">Tarifa Visitante</div>
                    <div className="inst-stat-value">₡{selectedInstalacion.tarifa_visitante}</div>
                  </div>
                </div>

                <div className="inst-modal-section-title">
                  <Clock size={14} /> Horarios
                </div>
                <p className="inst-modal-horario">{selectedInstalacion.horarios}</p>

                <div className="inst-modal-section-title">
                  <MapPin size={14} /> Servicios Disponibles
                </div>
                <div className="inst-modal-tags">
                  {selectedInstalacion.servicios.map((servicio, idx) => (
                    <span key={idx} className="inst-tag">{servicio}</span>
                  ))}
                </div>

                <hr className="inst-modal-divider" />

                <CalendarBooking instalacion={selectedInstalacion} />

                <button
                  onClick={() => setSelectedInstalacion(null)}
                  className="inst-modal-btn"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Map */}
        <section className="inst-map-section">
          <div className="inst-map-inner">
            <h2 className="inst-map-title">Nuestra <span>Ubicación</span></h2>
            <div className="inst-map-line" />
            <div className="inst-map-frame">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0, display: 'block' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8373916357543!2d-84.21447!3d10.01622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sAlajuela%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                title="Ubicación Club Campestre La Cueva"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
