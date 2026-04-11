import { useState } from 'react'
import { MapPin, Clock, Users, X } from 'lucide-react'
import CalendarBooking from '../components/CalendarBooking'

export default function Instalaciones() {
  const [selectedInstalacion, setSelectedInstalacion] = useState(null)

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
      imagen: 'https://via.placeholder.com/400x300?text=Gimnasio',
      capacidad: 50,
      horarios: '6:00 AM - 9:00 PM',
      servicios: ['Entrenadores', 'Clases grupales', 'Duchas'],
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
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Nuestras Instalaciones</h1>
          <p className="text-lg text-blue-100">
            Descubre todas las comodidades que tenemos para ti
          </p>
        </div>
      </section>

      {/* Grid de Instalaciones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instalaciones.map((inst, idx) => (
              <div
                key={inst.id}
                className="card overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedInstalacion(inst)}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <img
                  src={inst.imagen}
                  alt={`${inst.nombre} - Club Campestre La Cueva`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {inst.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {inst.descripcion}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      Capacidad: {inst.capacidad} personas
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {inst.horarios}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detalle */}
      {selectedInstalacion && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${selectedInstalacion.id}`}
        >
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedInstalacion.imagen}
                alt={`Imagen de ${selectedInstalacion.nombre} - Club Campestre La Cueva`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <button
                onClick={() => setSelectedInstalacion(null)}
                aria-label="Cerrar detalles de la instalación"
                className="absolute top-4 right-4 bg-white dark:bg-slate-700 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-600 transition focus:ring-2 focus:ring-orange-600 focus:outline-none"
              >
                <X size={24} className="text-gray-900 dark:text-white" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h2 id={`modal-title-${selectedInstalacion.id}`} className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  {selectedInstalacion.nombre}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                  {selectedInstalacion.descripcion}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">Capacidad</p>
                  <p className="text-2xl font-bold text-blue-600">{selectedInstalacion.capacidad}</p>
                  <p className="text-xs text-blue-700 dark:text-blue-200">personas</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-green-900 dark:text-green-300">Tarifa Visitante</p>
                  <p className="text-2xl font-bold text-green-600">₡{selectedInstalacion.tarifa_visitante}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    <Clock size={18} className="inline mr-2" />
                    Horarios
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{selectedInstalacion.horarios}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    <MapPin size={18} className="inline mr-2" />
                    Servicios Disponibles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedInstalacion.servicios.map((servicio, idx) => (
                      <span key={idx} className="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
                        {servicio}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calendario para agendar */}
              <div className="border-t dark:border-slate-700 pt-6">
                <CalendarBooking instalacion={selectedInstalacion} />
              </div>

              <button
                onClick={() => setSelectedInstalacion(null)}
                className="btn-secondary w-full"
                aria-label="Cerrar"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ubicación */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Ubicación</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8373916357543!2d-84.21447!3d10.01622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sAlajuela%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1234567890"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
