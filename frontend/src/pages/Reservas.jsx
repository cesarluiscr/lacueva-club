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
    title: 'Validacion en tiempo real',
    description: 'Antes de confirmar, el sistema consulta disponibilidad real para reducir conflictos.'
  },
  {
    title: 'Capacidad controlada',
    description: 'Cada reserva respeta el maximo de asistentes permitido por la instalacion.'
  },
  {
    title: 'Horarios claros',
    description: 'La hora de cierre se calcula automaticamente segun la duracion seleccionada.'
  },
  {
    title: 'Acceso protegido',
    description: 'La reserva requiere sesion activa con JWT valido para proteger la cuenta del socio.'
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

        if (!response.ok || !data.success) {
          throw new Error(data.error || 'No fue posible cargar las instalaciones')
        }

        const activas = (data.data || []).filter((instalacion) => instalacion.estado !== 'cerrada')
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
    () => instalaciones.find((instalacion) => instalacion.id === formData.instalacion_id) || null,
    [instalaciones, formData.instalacion_id]
  )

  const horaFin = useMemo(
    () => buildEndTime(formData.hora_inicio, formData.duracion),
    [formData.hora_inicio, formData.duracion]
  )

  const availabilityTone = useMemo(() => {
    if (loadingDisponibilidad) {
      return {
        label: 'Consultando',
        className: 'border-blue-200 bg-blue-50 text-blue-700'
      }
    }

    if (!availabilityMessage) {
      return {
        label: 'Pendiente',
        className: 'border-slate-200 bg-white/80 text-slate-600'
      }
    }

    if (availabilityMessage.includes('No hay') || availabilityMessage.includes('no esta disponible')) {
      return {
        label: 'Limitado',
        className: 'border-amber-200 bg-amber-50 text-amber-700'
      }
    }

    if (availabilityMessage.includes('Horarios disponibles')) {
      return {
        label: 'Disponible',
        className: 'border-emerald-200 bg-emerald-50 text-emerald-700'
      }
    }

    return {
      label: 'Revision',
      className: 'border-red-200 bg-red-50 text-red-700'
    }
  }, [availabilityMessage, loadingDisponibilidad])

  useEffect(() => {
    const fetchDisponibilidad = async () => {
      if (!formData.instalacion_id || !formData.fecha) {
        setAvailabilityMessage('')
        return
      }

      setLoadingDisponibilidad(true)
      setAvailabilityMessage('')

      try {
        const response = await fetch(`${API_URL}/reservas/disponibilidad/${formData.instalacion_id}?fecha=${formData.fecha}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'No se pudo consultar la disponibilidad')
        }

        const horarios = data.horarios_disponibles || []
        const disponibles = horarios.filter((slot) => slot.disponible).map((slot) => slot.hora)

        if (!disponibles.length) {
          setAvailabilityMessage('No hay horarios disponibles para esa fecha.')
          return
        }

        if (formData.hora_inicio && !disponibles.includes(formData.hora_inicio)) {
          setAvailabilityMessage('La hora elegida ya no esta disponible. Selecciona otra opcion.')
          return
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

  const handleChange = (event) => {
    const { name, value } = event.target
    setFeedback({ type: 'idle', message: '' })
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFeedback({ type: 'idle', message: '' })

    if (!selectedInstalacion) {
      setFeedback({ type: 'error', message: 'Selecciona una instalacion valida.' })
      return
    }

    const token = getStoredToken()
    if (!token) {
      setFeedback({
        type: 'warning',
        message: 'Necesitas iniciar sesion para reservar. Guarda el JWT del login en localStorage con la clave token, authToken o jwtToken.'
      })
      return
    }

    if (!horaFin || horaFin <= formData.hora_inicio) {
      setFeedback({ type: 'error', message: 'La hora final calculada es invalida.' })
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch(`${API_URL}/reservas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          instalacion_id: formData.instalacion_id,
          fecha: formData.fecha,
          hora_inicio: formData.hora_inicio,
          hora_fin: horaFin,
          numero_asistentes: Number(formData.numero_asistentes)
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'No fue posible crear la reserva')
      }

      setFeedback({
        type: 'success',
        message: `Reserva confirmada para ${data.reserva?.instalacion || selectedInstalacion.nombre} el ${formData.fecha} de ${formData.hora_inicio} a ${horaFin}.`
      })
      setFormData({
        instalacion_id: '',
        fecha: '',
        hora_inicio: '',
        duracion: '1',
        numero_asistentes: '1'
      })
      setAvailabilityMessage('')
    } catch (error) {
      setFeedback({ type: 'error', message: error.message || 'Error al procesar la reserva.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(0,97,255,0.16),_transparent_32%),linear-gradient(180deg,_#f7fbff_0%,_#eef6ff_45%,_#ffffff_100%)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-slide-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-700 shadow-lg shadow-blue-100/80 backdrop-blur">
                <Sparkles size={14} />
                Reserva digital del club
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
                Un flujo de reserva mas
                <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-500 bg-clip-text text-transparent"> moderno, claro y confiable</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
                Consulta disponibilidad real, revisa capacidad y confirma tu espacio desde una experiencia mas limpia, visual y facil de seguir.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
                  Disponibilidad en tiempo real
                </div>
                <div className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
                  Validacion por capacidad
                </div>
                <div className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
                  Confirmacion protegida con JWT
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.22),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.18),_transparent_26%)]" />
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Vista rapida</p>
                      <h2 className="mt-2 text-2xl font-extrabold">Tu proxima reserva</h2>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Estado</p>
                      <p className="mt-1 text-sm font-bold text-emerald-300">{availabilityTone.label}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Instalaciones</p>
                      <p className="mt-3 text-3xl font-extrabold">{instalaciones.length}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Hora final</p>
                      <p className="mt-3 text-3xl font-extrabold">{horaFin || '--:--'}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Tarifa socio</p>
                      <p className="mt-3 text-2xl font-extrabold">{selectedInstalacion ? formatMoney(selectedInstalacion.tarifa_socio) : '--'}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-cyan-100">Instalacion elegida</p>
                        <p className="mt-2 text-2xl font-extrabold">{selectedInstalacion?.nombre || 'Selecciona una opcion'}</p>
                      </div>
                      <ArrowRight className="mt-1 text-cyan-300" size={22} />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {selectedInstalacion?.descripcion || 'Cuando elijas una instalacion veras aqui su capacidad, tarifa y contexto para decidir mas rapido.'}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3 text-sm">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-slate-100">
                        Capacidad: {selectedInstalacion?.capacidad || '--'}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-slate-100">
                        Apertura: {selectedInstalacion?.horario_apertura || '--'}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-slate-100">
                        Cierre: {selectedInstalacion?.horario_cierre || '--'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/88 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur xl:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400" />

              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-700">Nueva reserva</p>
                  <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Agenda tu espacio con una vista mas limpia</h2>
                  <p className="mt-3 max-w-2xl text-slate-600">
                    Selecciona instalacion, horario y asistentes. El sistema calcula la reserva y valida todo antes de enviarla.
                  </p>
                </div>

                <div className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${availabilityTone.className}`}>
                  {availabilityTone.label}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-3 block text-sm font-bold uppercase tracking-[0.18em] text-slate-500" htmlFor="instalacion_id">
                      Instalacion
                    </label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
                      <select
                        id="instalacion_id"
                        name="instalacion_id"
                        value={formData.instalacion_id}
                        onChange={handleChange}
                        className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50/80 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        disabled={loadingInstalaciones}
                        required
                      >
                        <option value="">
                          {loadingInstalaciones ? 'Cargando instalaciones...' : 'Selecciona una instalacion'}
                        </option>
                        {instalaciones.map((instalacion) => (
                          <option key={instalacion.id} value={instalacion.id}>
                            {instalacion.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-bold uppercase tracking-[0.18em] text-slate-500" htmlFor="fecha">
                      Fecha
                    </label>
                    <div className="relative">
                      <Calendar className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
                      <input
                        id="fecha"
                        name="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={handleChange}
                        className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50/80 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-bold uppercase tracking-[0.18em] text-slate-500" htmlFor="hora_inicio">
                      Hora de inicio
                    </label>
                    <div className="relative">
                      <Clock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
                      <input
                        id="hora_inicio"
                        name="hora_inicio"
                        type="time"
                        value={formData.hora_inicio}
                        onChange={handleChange}
                        className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50/80 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-bold uppercase tracking-[0.18em] text-slate-500" htmlFor="duracion">
                      Duracion
                    </label>
                    <select
                      id="duracion"
                      name="duracion"
                      value={formData.duracion}
                      onChange={handleChange}
                      className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50/80 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="1">1 hora</option>
                      <option value="2">2 horas</option>
                      <option value="3">3 horas</option>
                      <option value="4">4 horas</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-bold uppercase tracking-[0.18em] text-slate-500" htmlFor="numero_asistentes">
                      Asistentes
                    </label>
                    <div className="relative">
                      <Users className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
                      <input
                        id="numero_asistentes"
                        name="numero_asistentes"
                        type="number"
                        min="1"
                        value={formData.numero_asistentes}
                        onChange={handleChange}
                        className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50/80 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        required
                      />
                    </div>
                  </div>
                </div>

                {feedback.message && (
                  <div className={`rounded-[1.5rem] border px-5 py-4 text-sm shadow-sm ${
                    feedback.type === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : feedback.type === 'warning'
                        ? 'border-amber-200 bg-amber-50 text-amber-700'
                        : 'border-red-200 bg-red-50 text-red-700'
                  }`}>
                    {feedback.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 py-4 text-base font-bold"
                  disabled={submitting || loadingInstalaciones}
                >
                  {submitting ? <LoaderCircle size={18} className="animate-spin" /> : <CheckCircle2 size={18} />}
                  {submitting ? 'Procesando reserva...' : 'Confirmar Reserva'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">Resumen automatico</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-slate-950">Todo claro antes de confirmar</h3>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 text-white shadow-lg">
                    <Sparkles size={20} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.4rem] bg-slate-950 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">Instalacion</p>
                    <p className="mt-3 text-2xl font-extrabold">{selectedInstalacion?.nombre || 'Pendiente'}</p>
                    <p className="mt-2 text-sm text-slate-300">
                      {selectedInstalacion?.descripcion || 'Elige una instalacion para ver capacidad, horario y tarifa.'}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Hora final</p>
                      <p className="mt-2 text-2xl font-extrabold text-slate-950">{horaFin || '--:--'}</p>
                    </div>
                    <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Tarifa socio</p>
                      <p className="mt-2 text-2xl font-extrabold text-slate-950">
                        {selectedInstalacion ? formatMoney(selectedInstalacion.tarifa_socio) : '--'}
                      </p>
                    </div>
                  </div>

                  <div className={`rounded-[1.4rem] border p-5 text-sm ${availabilityTone.className}`}>
                    <div className="mb-3 flex items-center gap-2 font-bold uppercase tracking-[0.2em]">
                      <Calendar size={16} />
                      Disponibilidad
                    </div>
                    <p className="leading-7">
                      {loadingDisponibilidad ? 'Consultando horarios disponibles...' : availabilityMessage || 'Selecciona instalacion y fecha para consultar horarios.'}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                    <div className="mb-3 flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-amber-900">
                      <ShieldAlert size={16} />
                      Inicio de sesion requerido
                    </div>
                    <p className="leading-7">
                      Esta vista ya trabaja contra la API real. Para confirmar una reserva necesitas un JWT valido guardado en `localStorage`.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                {policyCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[1.6rem] border border-slate-200 bg-white/90 p-6 shadow-[0_16px_44px_rgba(15,23,42,0.05)] backdrop-blur"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 p-3 text-white shadow-lg">
                      <AlertCircle size={18} />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
