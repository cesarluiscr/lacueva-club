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
      <section className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-blue-100">
            Estamos aquí para ayudarte. ¡Comunícate con nosotros!
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Envíanos un Mensaje</h2>
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
            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Información de Contacto</h2>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:shadow-lg hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="0">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg">
                    <Phone size={28} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">2433-7171</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 hover:shadow-lg hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="100">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                    <MessageCircle size={28} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/50672434203"
                      className="text-green-600 dark:text-green-400 hover:underline font-semibold text-lg"
                    >
                      7243-4203
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/30 hover:shadow-lg hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="200">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg">
                    <Mail size={28} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a
                      href="mailto:info@lacuevasa.com"
                      className="text-red-600 dark:text-red-400 hover:underline font-semibold"
                    >
                      info@lacuevasa.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 hover:shadow-lg hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="300">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg">
                    <MapPin size={28} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Ubicación</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">
                      Alajuela, Costa Rica
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/30 hover:shadow-lg hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="400">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg">
                    <Clock size={28} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Horarios de Atención</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                      Lunes - Viernes: 8:00 AM - 5:00 PM<br />
                      Sábado: 9:00 AM - 1:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">⏱️ Tiempo de Respuesta</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Respondemos mensajes dentro de 24 horas hábiles. Para consultas urgentes, llama directamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
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
              <details key={idx} className="group border border-gray-200 rounded-lg" data-aos="fade-up" data-aos-delay={idx * 100}>
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
