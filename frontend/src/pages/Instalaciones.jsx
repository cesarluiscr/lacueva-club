import { useState } from 'react'
import { MapPin, Clock, Users } from 'lucide-react'

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
                  alt={inst.nombre}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="relative">
              <img
                src={selectedInstalacion.imagen}
                alt={selectedInstalacion.nombre}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <button
                onClick={() => setSelectedInstalacion(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {selectedInstalacion.nombre}
              </h2>
              <p className="text-gray-600 mb-4">
                {selectedInstalacion.descripcion}
              </p>
              <div className="space-y-2 mb-4">
                <p><strong>Servicios:</strong> {selectedInstalacion.servicios.join(', ')}</p>
                <p><strong>Horarios:</strong> {selectedInstalacion.horarios}</p>
                <p><strong>Tarifa Visitante:</strong> ${selectedInstalacion.tarifa_visitante}</p>
              </div>
              <button
                onClick={() => setSelectedInstalacion(null)}
                className="btn-primary w-full"
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
