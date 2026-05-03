import { useState } from 'react'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

export default function CalendarBooking({ instalacion }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [guestCount, setGuestCount] = useState(1)
  const [loading, setLoading] = useState(false)

  const horariosDisponibles = [
    '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ]

  const mañanaMinimo = new Date()
  mañanaMinimo.setDate(mañanaMinimo.getDate() + 1)
  const minDate = mañanaMinimo.toISOString().split('T')[0]

  const mañanaMaximo = new Date()
  mañanaMaximo.setDate(mañanaMaximo.getDate() + 30)
  const maxDate = mañanaMaximo.toISOString().split('T')[0]

  const handleAgendar = async (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) {
      alert('Por favor selecciona una fecha y hora')
      return
    }

    setLoading(true)
    try {
      // Generar URL de Google Calendar
      const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: `Visita: ${instalacion?.nombre || 'Club Campestre La Cueva'}`,
        dates: `${selectedDate.replace(/-/g, '')}T${selectedTime.replace(/:/g, '')}00/${selectedDate.replace(/-/g, '')}T${String(parseInt(selectedTime.split(':')[0]) + 1).padStart(2, '0')}${selectedTime.split(':')[1]}00`,
        location: 'Club Campestre La Cueva, Alajuela, Costa Rica',
        description: `Visita a ${instalacion?.nombre}\nPersonas: ${guestCount}`,
        ctz: 'America/Costa_Rica'
      })

      window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, '_blank')
      alert('¡Se abrió Google Calendar! Confirma tu visita.')
    } catch (error) {
      console.error('Error al agendar:', error)
      alert('Error al agendar la visita')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card p-8 bg-white dark:bg-slate-800">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
        <Calendar size={28} className="text-blue-600" />
        Agendar Visita en Google Calendar
      </h3>

      <form onSubmit={handleAgendar} className="space-y-6">
        {/* Fecha */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            <Calendar size={18} className="inline mr-2" />
            Fecha
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={minDate}
            max={maxDate}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            aria-label="Selecciona una fecha para tu visita"
          />
          <p className="text-xs text-gray-500 mt-1">Mínimo mañana, máximo 30 días</p>
        </div>

        {/* Hora */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            <Clock size={18} className="inline mr-2" />
            Hora
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            aria-label="Selecciona una hora"
          >
            <option value="">-- Selecciona una hora --</option>
            {horariosDisponibles.map((hora) => (
              <option key={hora} value={hora}>
                {hora}
              </option>
            ))}
          </select>
        </div>

        {/* Número de personas */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            <Users size={18} className="inline mr-2" />
            Número de personas
          </label>
          <input
            type="number"
            value={guestCount}
            onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value)))}
            min="1"
            max="20"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            aria-label="Número de personas que asistirán"
          />
        </div>

        {/* Información del lugar */}
        {instalacion && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-start gap-3">
            <MapPin size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold">{instalacion.nombre}</p>
              <p className="text-xs">{instalacion.descripcion}</p>
            </div>
          </div>
        )}

        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          aria-label="Agendar visita en Google Calendar"
          className="w-full btn-primary py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Agendando...' : 'Agendar en Google Calendar'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Se abrirá Google Calendar para confirmar tu visita
        </p>
      </form>
    </div>
  )
}
