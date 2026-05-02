import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

const GOLD = '#C9A84C'
const GOLD_DIM = 'rgba(201,168,76,0.55)'
const BLACK = '#0A0A0A'
const DARK = '#161616'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const contactItems = [
    {
      icon: <Phone size={22} strokeWidth={2.5} />,
      label: 'Teléfono',
      value: '2433-7171',
      href: 'tel:24337171'
    },
    {
      icon: <MessageCircle size={22} strokeWidth={2.5} />,
      label: 'WhatsApp',
      value: '7243-4203',
      href: 'https://wa.me/50672434203'
    },
    {
      icon: <Mail size={22} strokeWidth={2.5} />,
      label: 'Email',
      value: 'info@lacuevasa.com',
      href: 'mailto:info@lacuevasa.com'
    },
    {
      icon: <MapPin size={22} strokeWidth={2.5} />,
      label: 'Ubicación',
      value: 'Alajuela, Costa Rica',
      href: null
    },
    {
      icon: <Clock size={22} strokeWidth={2.5} />,
      label: 'Horarios',
      value: 'Lun–Vie 8–5 PM · Sáb 9–1 PM',
      href: null
    }
  ]

  const faqs = [
    {
      q: '¿Cuál es el horario de atención?',
      a: 'Estamos abiertos de lunes a viernes 8:00 AM - 5:00 PM, y sábados 9:00 AM - 1:00 PM.'
    },
    {
      q: '¿Cómo reporto un problema con mi reserva?',
      a: 'Puedes llamar al 2433-7171 o enviar un email a info@lacuevasa.com con detalles del problema.'
    },
    {
      q: '¿Ofrecen servicios de catering?',
      a: 'Sí, contamos con restaurante y servicio de catering para eventos. Contacta para cotización.'
    },
    {
      q: '¿Hay estacionamiento disponible?',
      a: 'Sí, contamos con amplio estacionamiento gratuito para nuestros visitantes.'
    }
  ]

  return (
    <>
      <style>{`
        .cnt-page {
          background: ${BLACK};
          min-height: 100vh;
          color: #e8e8e8;
        }

        /* ── HERO ── */
        .cnt-hero {
          position: relative;
          padding: 72px 24px 56px;
          text-align: center;
          overflow: hidden;
          background: ${BLACK};
        }
        .cnt-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px);
        }
        .cnt-hero-inner { position: relative; max-width: 640px; margin: 0 auto; }
        .cnt-hero-eyebrow {
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
        .cnt-hero-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 10px;
        }
        .cnt-hero-title span { color: ${GOLD}; }
        .cnt-hero-line {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          margin: 14px auto;
        }
        .cnt-hero-sub {
          color: rgba(255,255,255,0.5);
          font-size: 1rem;
        }

        /* ── MAIN SECTION ── */
        .cnt-section {
          padding: 64px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cnt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 900px) {
          .cnt-grid { grid-template-columns: 1fr; }
        }

        /* ── FORM ── */
        .cnt-card {
          background: ${DARK};
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          padding: 36px;
          position: relative;
          overflow: hidden;
        }
        .cnt-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
        }
        .cnt-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 24px;
        }
        .cnt-card-title span { color: ${GOLD}; }
        .cnt-form-group { margin-bottom: 18px; }
        .cnt-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          margin-bottom: 8px;
        }
        .cnt-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 6px;
          padding: 12px 14px;
          color: #e8e8e8;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .cnt-input:focus {
          border-color: rgba(201,168,76,0.55);
          background: rgba(201,168,76,0.04);
        }
        .cnt-input::placeholder { color: rgba(255,255,255,0.2); }
        textarea.cnt-input { resize: vertical; min-height: 110px; }
        .cnt-submit {
          width: 100%;
          padding: 14px;
          background: transparent;
          border: 1px solid ${GOLD};
          color: ${GOLD};
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.25s;
          margin-top: 6px;
        }
        .cnt-submit:hover {
          background: rgba(201,168,76,0.1);
          box-shadow: 0 0 20px rgba(201,168,76,0.15);
        }
        .cnt-success {
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 6px;
          padding: 12px 16px;
          color: ${GOLD};
          font-size: 0.85rem;
          margin-bottom: 16px;
          text-align: center;
        }

        /* ── CONTACT ITEMS ── */
        .cnt-info-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cnt-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.12);
          border-radius: 10px;
          padding: 16px 18px;
          transition: border-color 0.2s, background 0.2s;
        }
        .cnt-info-item:hover {
          border-color: rgba(201,168,76,0.3);
          background: rgba(201,168,76,0.04);
        }
        .cnt-info-icon {
          width: 44px;
          height: 44px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${GOLD};
          flex-shrink: 0;
        }
        .cnt-info-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          margin-bottom: 3px;
        }
        .cnt-info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #e8e8e8;
        }
        .cnt-info-value a {
          color: #e8e8e8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .cnt-info-value a:hover { color: ${GOLD}; }
        .cnt-response-note {
          margin-top: 20px;
          background: rgba(201,168,76,0.05);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 8px;
          padding: 16px 18px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }
        .cnt-response-note strong { color: ${GOLD}; font-size: 0.75rem; letter-spacing: 1.5px; text-transform: uppercase; display: block; margin-bottom: 5px; }

        /* ── MAP ── */
        .cnt-map-section {
          padding: 56px 24px;
          background: #0d0d0d;
          border-top: 1px solid rgba(201,168,76,0.1);
        }
        .cnt-map-inner { max-width: 1000px; margin: 0 auto; }
        .cnt-map-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 6px;
        }
        .cnt-map-title span { color: ${GOLD}; }
        .cnt-map-line {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          margin: 0 auto 28px;
        }
        .cnt-map-frame {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(201,168,76,0.2);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        /* ── FAQ ── */
        .cnt-faq-section {
          padding: 64px 24px;
          background: ${BLACK};
          border-top: 1px solid rgba(201,168,76,0.1);
        }
        .cnt-faq-inner { max-width: 760px; margin: 0 auto; }
        .cnt-faq-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 6px;
        }
        .cnt-faq-title span { color: ${GOLD}; }
        .cnt-faq-line {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
          margin: 0 auto 32px;
        }
        .cnt-faq-item {
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 8px;
          margin-bottom: 10px;
          overflow: hidden;
          transition: border-color 0.2s;
          background: #161616;
        }
        .cnt-faq-item:hover { border-color: rgba(201,168,76,0.3); }
        .cnt-faq-item summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.85);
          list-style: none;
          background: rgba(255,255,255,0.02);
          transition: background 0.2s;
        }
        .cnt-faq-item summary:hover { background: rgba(201,168,76,0.04); }
        .cnt-faq-item summary::-webkit-details-marker { display: none; }
        .cnt-faq-chevron { color: ${GOLD_DIM}; font-size: 0.8rem; transition: transform 0.25s; }
        .cnt-faq-item[open] summary { background: rgba(201,168,76,0.04); }
        .cnt-faq-item[open] .cnt-faq-chevron { transform: rotate(180deg); }
        .cnt-faq-answer {
          padding: 14px 20px 18px;
          font-size: 0.87rem;
          color: rgba(255,255,255,0.5);
          border-top: 1px solid rgba(201,168,76,0.1);
          line-height: 1.7;
        }
      `}</style>

      <div className="cnt-page">
        {/* Hero */}
        <section className="cnt-hero">
          <div className="cnt-hero-inner">
            <span className="cnt-hero-eyebrow">Club Campestre La Cueva</span>
            <h1 className="cnt-hero-title">Ponte en <span>Contacto</span></h1>
            <div className="cnt-hero-line" />
            <p className="cnt-hero-sub">Estamos aquí para ayudarte. ¡Comunícate con nosotros!</p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="cnt-section">
          <div className="cnt-grid">
            {/* Formulario */}
            <div className="cnt-card">
              <h2 className="cnt-card-title">Envíanos un <span>Mensaje</span></h2>

              {sent && (
                <div className="cnt-success">
                  ✦ Tu mensaje ha sido enviado. Pronto nos pondremos en contacto.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="cnt-form-group">
                  <label className="cnt-label">Nombre</label>
                  <input
                    type="text"
                    className="cnt-input"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                  />
                </div>
                <div className="cnt-form-group">
                  <label className="cnt-label">Email</label>
                  <input
                    type="email"
                    className="cnt-input"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="cnt-form-group">
                  <label className="cnt-label">Teléfono</label>
                  <input
                    type="tel"
                    className="cnt-input"
                    placeholder="Opcional"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </div>
                <div className="cnt-form-group">
                  <label className="cnt-label">Asunto</label>
                  <input
                    type="text"
                    className="cnt-input"
                    placeholder="¿Sobre qué trata tu mensaje?"
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    required
                  />
                </div>
                <div className="cnt-form-group">
                  <label className="cnt-label">Mensaje</label>
                  <textarea
                    className="cnt-input"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="cnt-submit">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div>
              <div className="cnt-card" style={{ marginBottom: '24px' }}>
                <h2 className="cnt-card-title">Información de <span>Contacto</span></h2>
                <div className="cnt-info-list">
                  {contactItems.map((item) => (
                    <div key={item.label} className="cnt-info-item">
                      <div className="cnt-info-icon">{item.icon}</div>
                      <div>
                        <div className="cnt-info-label">{item.label}</div>
                        <div className="cnt-info-value">
                          {item.href
                            ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{item.value}</a>
                            : item.value
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cnt-response-note">
                  <strong>⏱ Tiempo de Respuesta</strong>
                  Respondemos mensajes dentro de 24 horas hábiles. Para consultas urgentes, llama directamente.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="cnt-map-section">
          <div className="cnt-map-inner">
            <h2 className="cnt-map-title">Ubícanos en el <span>Mapa</span></h2>
            <div className="cnt-map-line" />
            <div className="cnt-map-frame">
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

        {/* FAQ */}
        <section className="cnt-faq-section">
          <div className="cnt-faq-inner">
            <h2 className="cnt-faq-title">Preguntas <span>Frecuentes</span></h2>
            <div className="cnt-faq-line" />
            {faqs.map((faq, idx) => (
              <details key={idx} className="cnt-faq-item">
                <summary>
                  {faq.q}
                  <span className="cnt-faq-chevron">▼</span>
                </summary>
                <p className="cnt-faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
