import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Tu mensaje ha sido enviado. Pronto nos pondremos en contacto.')
    setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-blue-100">
            Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    value={formData.asunto}
                    onChange={(e) =>
                      setFormData({ ...formData, asunto: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary font-bold py-3">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">2433-7171</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/50672434203"
                      className="text-blue-600 hover:underline"
                    >
                      7243-4203
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@lacuevasa.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@lacuevasa.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">
                      Alajuela, Costa Rica
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Horarios de Atención</h3>
                    <p className="text-gray-600 text-sm">
                      Lunes - Viernes: 8:00 AM - 5:00 PM<br />
                      Sábado: 9:00 AM - 1:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-2">⏱️ Tiempo de Respuesta</h3>
                <p className="text-blue-800 text-sm">
                  Respondemos mensajes dentro de 24 horas hábiles. Para consultas urgentes, llama directamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Ubícanos en el Mapa</h2>
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              {
                q: '¿Cuál es el horario de atención?',
                a: 'Estamos abiertos de lunes a viernes 8:00 AM - 5:00 PM, y sábados 9:00 AM - 1:00 PM.'
              },
              {
                q: '¿Cómo reporto un problema con mi membresía?',
                a: 'Puedes llamar al 2433-7171 o enviar un email a info@lacuevasa.com con detalles del problema.'
              },
              {
                q: '¿Ofrecen servicios de catering?',
                a: 'Sí, contamos con restaurante y servicio de catering para eventos. Contacta para cotización.'
              },
              {
                q: '¿Hay estacionamiento disponible?',
                a: 'Sí, contamos con amplio estacionamiento gratuito para socios y visitantes.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-lg">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-gray-900 hover:bg-gray-50">
                  {faq.q}
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="p-4 text-gray-600 border-t">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
