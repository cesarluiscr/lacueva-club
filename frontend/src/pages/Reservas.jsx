import { useEffect, useMemo, useState } from 'react'
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  LoaderCircle,
  MapPin,
  ShieldAlert,
  Sparkles,
  Users
} from 'lucide-react'

const GOLD = '#C9A84C'
const GOLD_DIM = 'rgba(201,168,76,0.55)'
const BLACK = '#0A0A0A'
const DARK = '#161616'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
const TOKEN_KEYS = ['token', 'authToken', 'jwtToken']

const formatMoney = (amount) => new Intl.NumberFormat('es-CR', {
  style: 'currency',
  currency: 'CRC',
  maximumFractionDigits: 0
}).format(Number(amount || 0))

const getStoredToken = () => {
  for (const key of TOKEN_KEYS) {
    const value = window.localStorage.getItem(key)
    if (value) return value
  }
  return ''
}

const buildEndTime = (startTime, duration) => {
  if (!startTime) return ''
  const [hours, minutes] = startTime.split(':').map(Number)
  const endDate = new Date(2000, 0, 1, hours, minutes)
  endDate.setHours(endDate.getHours() + Number(duration))
  return `${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}`
}

const policyCards = [
  {
    title: 'Validación en tiempo real',
    description: 'Antes de confirmar, el sistema consulta disponibilidad real para reducir conflictos.'
  },
  {
    title: 'Capacidad controlada',
    description: 'Cada reserva respeta el máximo de asistentes permitido por la instalación.'
  },
  {
    title: 'Horarios claros',
    description: 'La hora de cierre se calcula automáticamente según la duración seleccionada.'
  },
  {
    title: 'Acceso protegido',
    description: 'La reserva requiere sesión activa con JWT válido para proteger la cuenta del socio.'
  }
]

export default function Reservas() {
  const [instalaciones, setInstalaciones] = useState([])
  const [loadingInstalaciones, setLoadingInstalaciones] = useState(true)
  const [loadingDisponibilidad, setLoadingDisponibilidad] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [availabilityMessage, setAvailabilityMessage] = useState('')
  const [feedback, setFeedback] = useState({ type: 'idle', message: '' })
  const [formData, setFormData] = useState({
    instalacion_id: '',
    fecha: '',
    hora_inicio: '',
    duracion: '1',
    numero_asistentes: '1'
  })

  useEffect(() => {
    const fetchInstalaciones = async () => {
      try {
        const response = await fetch(`${API_URL}/instalaciones`)
        const data = await response.json()
        if (!response.ok || !data.success) throw new Error(data.error || 'No fue posible cargar las instalaciones')
        const activas = (data.data || []).filter((i) => i.estado !== 'cerrada')
        setInstalaciones(activas)
      } catch (error) {
        setFeedback({ type: 'error', message: error.message || 'Error al cargar instalaciones.' })
      } finally {
        setLoadingInstalaciones(false)
      }
    }
    fetchInstalaciones()
  }, [])

  const selectedInstalacion = useMemo(
    () => instalaciones.find((i) => i.id === formData.instalacion_id) || null,
    [instalaciones, formData.instalacion_id]
  )

  const horaFin = useMemo(
    () => buildEndTime(formData.hora_inicio, formData.duracion),
    [formData.hora_inicio, formData.duracion]
  )

  const availabilityStatus = useMemo(() => {
    if (loadingDisponibilidad) return { label: 'Consultando', color: GOLD_DIM }
    if (!availabilityMessage) return { label: 'Pendiente', color: 'rgba(255,255,255,0.35)' }
    if (availabilityMessage.includes('No hay') || availabilityMessage.includes('no esta disponible'))
      return { label: 'Limitado', color: '#e8a855' }
    if (availabilityMessage.includes('Horarios disponibles'))
      return { label: 'Disponible', color: '#7bc87b' }
    return { label: 'Revisar', color: '#e07070' }
  }, [availabilityMessage, loadingDisponibilidad])

  useEffect(() => {
    const fetchDisponibilidad = async () => {
      if (!formData.instalacion_id || !formData.fecha) { setAvailabilityMessage(''); return }
      setLoadingDisponibilidad(true)
      setAvailabilityMessage('')
      try {
        const response = await fetch(`${API_URL}/reservas/disponibilidad/${formData.instalacion_id}?fecha=${formData.fecha}`)
        const data = await response.json()
        if (!response.ok) throw new Error(data.error || 'No se pudo consultar la disponibilidad')
        const horarios = data.horarios_disponibles || []
        const disponibles = horarios.filter((s) => s.disponible).map((s) => s.hora)
        if (!disponibles.length) { setAvailabilityMessage('No hay horarios disponibles para esa fecha.'); return }
        if (formData.hora_inicio && !disponibles.includes(formData.hora_inicio)) {
          setAvailabilityMessage('La hora elegida ya no está disponible. Selecciona otra opción.'); return
        }
        setAvailabilityMessage(`Horarios disponibles: ${disponibles.join(', ')}`)
      } catch (error) {
        setAvailabilityMessage(error.message || 'No se pudo cargar la disponibilidad.')
      } finally {
        setLoadingDisponibilidad(false)
      }
    }
    fetchDisponibilidad()
  }, [formData.fecha, formData.hora_inicio, formData.instalacion_id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFeedback({ type: 'idle', message: '' })
    setFormData((c) => ({ ...c, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFeedback({ type: 'idle', message: '' })
    if (!selectedInstalacion) { setFeedback({ type: 'error', message: 'Selecciona una instalación válida.' }); return }
    const token = getStoredToken()
    if (!token) {
      setFeedback({ type: 'warning', message: 'Necesitas iniciar sesión para reservar. Guarda el JWT del login en localStorage.' })
      return
    }
    if (!horaFin || horaFin <= formData.hora_inicio) { setFeedback({ type: 'error', message: 'La hora final calculada es inválida.' }); return }
    setSubmitting(true)
    try {
      const response = await fetch(`${API_URL}/reservas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          instalacion_id: formData.instalacion_id,
          fecha: formData.fecha,
          hora_inicio: formData.hora_inicio,
          hora_fin: horaFin,
          numero_asistentes: Number(formData.numero_asistentes)
        })
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'No fue posible crear la reserva')
      setFeedback({
        type: 'success',
        message: `Reserva confirmada para ${data.reserva?.instalacion || selectedInstalacion.nombre} el ${formData.fecha} de ${formData.hora_inicio} a ${horaFin}.`
      })
      setFormData({ instalacion_id: '', fecha: '', hora_inicio: '', duracion: '1', numero_asistentes: '1' })
      setAvailabilityMessage('')
    } catch (error) {
      setFeedback({ type: 'error', message: error.message || 'Error al procesar la reserva.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <style>{`
        .res-page {
          background: ${BLACK};
          min-height: 100vh;
          color: #e8e8e8;
        }

        /* ── HERO ── */
        .res-hero {
          position: relative;
          padding: 72px 24px 56px;
          background: ${BLACK};
          overflow: hidden;
        }
        .res-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px);
        }
        .res-hero-inner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .res-hero-inner { grid-template-columns: 1fr; }
          .res-hero-preview { display: none; }
        }
        .res-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          border: 1px solid rgba(201,168,76,0.25);
          padding: 5px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .res-hero-title {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 700;
          color: #fff;
          font-style: italic;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .res-hero-title span { color: ${GOLD}; }
        .res-hero-sub {
          color: rgba(255,255,255,0.5);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 20px;
        }
        .res-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .res-hero-tag {
          background: rgba(201,168,76,0.07);
          border: 1px solid rgba(201,168,76,0.2);
          color: ${GOLD_DIM};
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* ── PREVIEW CARD ── */
        .res-preview {
          background: #111;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 14px;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }
        .res-preview::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
        }
        .res-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .res-preview-label {
          font-size: 0.68rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          margin-bottom: 4px;
        }
        .res-preview-heading {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
        }
        .res-status-badge {
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 8px;
          padding: 8px 14px;
          text-align: right;
        }
        .res-status-label { font-size: 0.6rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 3px; }
        .res-status-value { font-size: 0.85rem; font-weight: 700; color: ${GOLD}; }
        .res-preview-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }
        .res-preview-stat {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 8px;
          padding: 12px;
        }
        .res-preview-stat-label { font-size: 0.6rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 6px; }
        .res-preview-stat-value { font-size: 1.5rem; font-weight: 700; color: #fff; }
        .res-preview-inst {
          background: rgba(201,168,76,0.05);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 10px;
          padding: 16px;
        }
        .res-preview-inst-name { font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .res-preview-inst-desc { font-size: 0.82rem; color: rgba(255,255,255,0.4); line-height: 1.5; }
        .res-preview-inst-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 12px; }
        .res-preview-inst-tag {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.55);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
        }

        /* ── MAIN SECTION ── */
        .res-section {
          padding: 56px 24px 64px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .res-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .res-grid { grid-template-columns: 1fr; }
        }

        /* ── FORM CARD ── */
        .res-form-card {
          background: ${DARK};
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 14px;
          padding: 36px;
          position: relative;
          overflow: hidden;
        }
        .res-form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
        }
        .res-form-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .res-form-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          margin-bottom: 6px;
        }
        .res-form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
        }
        .res-form-title span { color: ${GOLD}; }
        .res-form-sub {
          color: rgba(255,255,255,0.4);
          font-size: 0.85rem;
          margin-top: 4px;
          max-width: 400px;
        }
        .res-avail-badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid rgba(201,168,76,0.3);
          color: ${GOLD};
          background: rgba(201,168,76,0.06);
          white-space: nowrap;
        }
        .res-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 600px) {
          .res-form-grid { grid-template-columns: 1fr; }
        }
        .res-col-full { grid-column: 1 / -1; }
        .res-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${GOLD_DIM};
          margin-bottom: 8px;
        }
        .res-input-wrap { position: relative; }
        .res-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(201,168,76,0.45);
          pointer-events: none;
        }
        .res-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 8px;
          padding: 13px 14px 13px 42px;
          color: #e8e8e8;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
          -webkit-appearance: none;
          appearance: none;
        }
        .res-input-noicon {
          padding-left: 14px;
        }
        .res-input:focus {
          border-color: rgba(201,168,76,0.55);
          background: rgba(201,168,76,0.04);
        }
        .res-input option { background: #1a1a1a; color: #e8e8e8; }
        .res-feedback {
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .res-feedback-success {
          background: rgba(123,200,123,0.08);
          border: 1px solid rgba(123,200,123,0.3);
          color: #7bc87b;
        }
        .res-feedback-warning {
          background: rgba(232,168,85,0.08);
          border: 1px solid rgba(232,168,85,0.3);
          color: #e8a855;
        }
        .res-feedback-error {
          background: rgba(224,112,112,0.08);
          border: 1px solid rgba(224,112,112,0.3);
          color: #e07070;
        }
        .res-submit {
          width: 100%;
          padding: 14px;
          background: transparent;
          border: 1px solid ${GOLD};
          color: ${GOLD};
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .res-submit:hover:not(:disabled) {
          background: rgba(201,168,76,0.1);
          box-shadow: 0 0 20px rgba(201,168,76,0.15);
        }
        .res-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        /* ── SIDEBAR ── */
        .res-sidebar { display: flex; flex-direction: column; gap: 20px; }
        .res-summary-card {
          background: ${DARK};
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .res-summary-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
        }
        .res-summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .res-summary-title { font-size: 1rem; font-weight: 700; color: #fff; }
        .res-summary-icon {
          width: 36px; height: 36px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: ${GOLD};
        }
        .res-inst-box {
          background: rgba(201,168,76,0.04);
          border: 1px solid rgba(201,168,76,0.12);
          border-radius: 8px;
          padding: 14px;
          margin-bottom: 12px;
        }
        .res-inst-box-label { font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; color: ${GOLD_DIM}; margin-bottom: 4px; }
        .res-inst-box-name { font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .res-inst-box-desc { font-size: 0.8rem; color: rgba(255,255,255,0.4); line-height: 1.5; }
        .res-mini-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 12px;
        }
        .res-mini-stat {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 8px;
          padding: 10px 12px;
        }
        .res-mini-stat-label { font-size: 0.6rem; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 4px; }
        .res-mini-stat-value { font-size: 1.2rem; font-weight: 700; color: #fff; }
        .res-avail-box {
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 0.82rem;
          line-height: 1.6;
        }
        .res-avail-box-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .res-warning-box {
          background: rgba(232,168,85,0.06);
          border: 1px solid rgba(232,168,85,0.2);
          border-radius: 8px;
          padding: 12px 14px;
        }
        .res-warning-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e8a855;
          margin-bottom: 6px;
        }
        .res-warning-text { font-size: 0.8rem; color: rgba(232,168,85,0.7); line-height: 1.6; }

        /* ── POLICY CARDS ── */
        .res-policy-grid {
          display: grid;
          gap: 12px;
        }
        .res-policy-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 10px;
          padding: 16px 18px;
          transition: border-color 0.2s;
        }
        .res-policy-card:hover { border-color: rgba(201,168,76,0.25); }
        .res-policy-icon {
          width: 32px; height: 32px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          color: ${GOLD};
          margin-bottom: 10px;
        }
        .res-policy-title { font-size: 0.88rem; font-weight: 700; color: #fff; margin-bottom: 5px; }
        .res-policy-desc { font-size: 0.8rem; color: rgba(255,255,255,0.4); line-height: 1.5; }

        /* date/time input color-scheme */
        .res-input[type="date"], .res-input[type="time"] { color-scheme: dark; }
      `}</style>

      <div className="res-page">
        {/* Hero */}
        <section className="res-hero">
          <div className="res-hero-inner">
            <div>
              <div className="res-hero-eyebrow">
                <Sparkles size={12} />
                Reserva digital del club
              </div>
              <h1 className="res-hero-title">
                Reserva tu espacio<br />
                <span>de forma elegante</span>
              </h1>
              <p className="res-hero-sub">
                Consulta disponibilidad real, revisa capacidad y confirma tu espacio de manera rápida y segura.
              </p>
              <div className="res-hero-tags">
                <span className="res-hero-tag">Disponibilidad en tiempo real</span>
                <span className="res-hero-tag">Validación por capacidad</span>
                <span className="res-hero-tag">Confirmación con JWT</span>
              </div>
            </div>

            {/* Preview card — hidden on mobile */}
            <div className="res-preview res-hero-preview">
              <div className="res-preview-header">
                <div>
                  <div className="res-preview-label">Vista rápida</div>
                  <div className="res-preview-heading">Tu próxima reserva</div>
                </div>
                <div className="res-status-badge">
                  <div className="res-status-label">Estado</div>
                  <div className="res-status-value">{availabilityStatus.label}</div>
                </div>
              </div>
              <div className="res-preview-stats">
                <div className="res-preview-stat">
                  <div className="res-preview-stat-label">Instalaciones</div>
                  <div className="res-preview-stat-value">{instalaciones.length}</div>
                </div>
                <div className="res-preview-stat">
                  <div className="res-preview-stat-label">Hora final</div>
                  <div className="res-preview-stat-value">{horaFin || '--'}</div>
                </div>
                <div className="res-preview-stat">
                  <div className="res-preview-stat-label">Tarifa</div>
                  <div className="res-preview-stat-value" style={{ fontSize: '1rem' }}>{selectedInstalacion ? formatMoney(selectedInstalacion.tarifa_socio) : '--'}</div>
                </div>
              </div>
              <div className="res-preview-inst">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="res-preview-inst-name">{selectedInstalacion?.nombre || 'Selecciona una opción'}</div>
                  <ArrowRight size={18} color={GOLD_DIM} />
                </div>
                <div className="res-preview-inst-desc">
                  {selectedInstalacion?.descripcion || 'Cuando elijas una instalación verás aquí su capacidad, horario y tarifa.'}
                </div>
                {selectedInstalacion && (
                  <div className="res-preview-inst-tags">
                    <span className="res-preview-inst-tag">Cap: {selectedInstalacion.capacidad}</span>
                    <span className="res-preview-inst-tag">Apertura: {selectedInstalacion.horario_apertura || '--'}</span>
                    <span className="res-preview-inst-tag">Cierre: {selectedInstalacion.horario_cierre || '--'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="res-section">
          <div className="res-grid">
            {/* Form */}
            <div className="res-form-card">
              <div className="res-form-header">
                <div>
                  <div className="res-form-eyebrow">Nueva reserva</div>
                  <div className="res-form-title">Agenda tu <span>espacio</span></div>
                  <div className="res-form-sub">Selecciona instalación, horario y asistentes.</div>
                </div>
                <div className="res-avail-badge">{availabilityStatus.label}</div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="res-form-grid">
                  <div className="res-col-full">
                    <label className="res-label">Instalación</label>
                    <div className="res-input-wrap">
                      <span className="res-input-icon"><MapPin size={16} /></span>
                      <select
                        name="instalacion_id"
                        value={formData.instalacion_id}
                        onChange={handleChange}
                        className="res-input"
                        disabled={loadingInstalaciones}
                        required
                      >
                        <option value="">{loadingInstalaciones ? 'Cargando...' : 'Selecciona una instalación'}</option>
                        {instalaciones.map((i) => (
                          <option key={i.id} value={i.id}>{i.nombre}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="res-label">Fecha</label>
                    <div className="res-input-wrap">
                      <span className="res-input-icon"><Calendar size={16} /></span>
                      <input
                        name="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={handleChange}
                        className="res-input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="res-label">Hora de inicio</label>
                    <div className="res-input-wrap">
                      <span className="res-input-icon"><Clock size={16} /></span>
                      <input
                        name="hora_inicio"
                        type="time"
                        value={formData.hora_inicio}
                        onChange={handleChange}
                        className="res-input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="res-label">Duración</label>
                    <select
                      name="duracion"
                      value={formData.duracion}
                      onChange={handleChange}
                      className="res-input res-input-noicon"
                    >
                      <option value="1">1 hora</option>
                      <option value="2">2 horas</option>
                      <option value="3">3 horas</option>
                      <option value="4">4 horas</option>
                    </select>
                  </div>

                  <div>
                    <label className="res-label">Asistentes</label>
                    <div className="res-input-wrap">
                      <span className="res-input-icon"><Users size={16} /></span>
                      <input
                        name="numero_asistentes"
                        type="number"
                        min="1"
                        value={formData.numero_asistentes}
                        onChange={handleChange}
                        className="res-input"
                        required
                      />
                    </div>
                  </div>
                </div>

                {feedback.message && (
                  <div style={{ marginTop: '18px' }}>
                    <div className={`res-feedback ${
                      feedback.type === 'success' ? 'res-feedback-success'
                      : feedback.type === 'warning' ? 'res-feedback-warning'
                      : 'res-feedback-error'
                    }`}>
                      {feedback.message}
                    </div>
                  </div>
                )}

                <div style={{ marginTop: '22px' }}>
                  <button
                    type="submit"
                    className="res-submit"
                    disabled={submitting || loadingInstalaciones}
                  >
                    {submitting ? <LoaderCircle size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
                    {submitting ? 'Procesando reserva...' : 'Confirmar Reserva'}
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="res-sidebar">
              {/* Summary */}
              <div className="res-summary-card">
                <div className="res-summary-header">
                  <div className="res-summary-title">Resumen automático</div>
                  <div className="res-summary-icon"><Sparkles size={16} /></div>
                </div>
                <div className="res-inst-box">
                  <div className="res-inst-box-label">Instalación</div>
                  <div className="res-inst-box-name">{selectedInstalacion?.nombre || 'Pendiente'}</div>
                  <div className="res-inst-box-desc">
                    {selectedInstalacion?.descripcion || 'Elige una instalación para ver sus detalles.'}
                  </div>
                </div>
                <div className="res-mini-stats">
                  <div className="res-mini-stat">
                    <div className="res-mini-stat-label">Hora final</div>
                    <div className="res-mini-stat-value">{horaFin || '--:--'}</div>
                  </div>
                  <div className="res-mini-stat">
                    <div className="res-mini-stat-label">Tarifa socio</div>
                    <div className="res-mini-stat-value" style={{ fontSize: '0.9rem' }}>
                      {selectedInstalacion ? formatMoney(selectedInstalacion.tarifa_socio) : '--'}
                    </div>
                  </div>
                </div>
                <div
                  className="res-avail-box"
                  style={{
                    background: 'rgba(201,168,76,0.05)',
                    border: `1px solid rgba(201,168,76,0.18)`,
                    color: availabilityStatus.color
                  }}
                >
                  <div className="res-avail-box-header">
                    <Calendar size={12} />
                    Disponibilidad
                  </div>
                  <span>
                    {loadingDisponibilidad
                      ? 'Consultando horarios disponibles...'
                      : availabilityMessage || 'Selecciona instalación y fecha para consultar.'}
                  </span>
                </div>
                <div className="res-warning-box" style={{ marginTop: '12px' }}>
                  <div className="res-warning-header">
                    <ShieldAlert size={12} />
                    Sesión requerida
                  </div>
                  <div className="res-warning-text">
                    Para confirmar necesitas un JWT válido guardado en localStorage.
                  </div>
                </div>
              </div>

              {/* Policy cards */}
              <div className="res-policy-grid">
                {policyCards.map((card) => (
                  <div key={card.title} className="res-policy-card">
                    <div className="res-policy-icon"><AlertCircle size={15} /></div>
                    <div className="res-policy-title">{card.title}</div>
                    <div className="res-policy-desc">{card.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
