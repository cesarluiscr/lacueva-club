import { useState } from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function Reservas() {
  const [formData, setFormData] = useState({
    instalacion: '',
    fecha: '',
    hora: '',
    duracion: '1'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Reserva enviada. Pronto recibirás confirmación por email.')
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Sistema de Reservas</h1>
          <p className="text-lg text-blue-100">
            Reserva tus instalaciones favoritas en línea
          </p>
        </div>
      </section>

      {/* Reserva Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Nueva Reserva</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-2" />
                  Instalación
                </label>
                <select
                  value={formData.instalacion}
                  onChange={(e) => setFormData({ ...formData, instalacion: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                >
                  <option value="">Selecciona una instalación</option>
                  <option value="piscina">Piscina Olímpica</option>
                  <option value="futbol">Cancha de Fútbol</option>
                  <option value="tenis">Cancha de Tenis</option>
                  <option value="salon">Salón para Eventos</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={formData.fecha}
                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Clock size={16} className="inline mr-2" />
                    Hora
                  </label>
                  <input
                    type="time"
                    value={formData.hora}
                    onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Duración (horas)
                </label>
                <select
                  value={formData.duracion}
                  onChange={(e) => setFormData({ ...formData, duracion: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3"
                >
                  <option value="1">1 hora</option>
                  <option value="2">2 horas</option>
                  <option value="3">3 horas</option>
                  <option value="4">4 horas</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-primary font-bold py-3"
              >
                Confirmar Reserva
              </button>
            </form>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2">📌 Información Importante</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Las reservas se confirman dentro de 24 horas</li>
              <li>• Puedes cancelar con 48 horas de anticipación</li>
              <li>• Inicia sesión para ver tus reservas previas</li>
              <li>• Se requiere depósito de seguridad</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mis Reservas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Mis Reservas</h2>
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 mb-4">
              Inicia sesión para ver tus reservas confirmadas
            </p>
            <button className="btn-primary">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </section>

      {/* Politicas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Políticas de Reserva</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cancelación</h3>
              <p className="text-gray-600">
                Cancela con 48 horas de anticipación para obtener reembolso completo. Cancelaciones posteriores tendrán una penalidad del 25%.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Depósito de Seguridad</h3>
              <p className="text-gray-600">
                Se requiere depósito equivalente al 50% de la tarifa. Será devuelto si no hay daños o incumplimientos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Límite de Reservas</h3>
              <p className="text-gray-600">
                Los socios pueden reservar máximo 2 espacios simultáneamente. Los visitantes máximo 1.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cumplimiento de Horarios</h3>
              <p className="text-gray-600">
                Se debe llegar 15 minutos antes. Si no llega en 30 minutos, se libera la reserva sin reembolso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
