import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Membresias() {
  const planes = [
    {
      id: 1,
      nombre: 'Socio Básico',
      descripcion: 'Perfecto para comenzar',
      precio_mensual: 60,
      precio_anual: 600,
      beneficios: [
        'Acceso a piscinas',
        'Acceso a gimnasio',
        'Descuento 10% en restaurante',
        'Acceso a eventos básicos',
        '1 invitado al mes'
      ],
      recomendado: false
    },
    {
      id: 2,
      nombre: 'Socio Activo',
      descripcion: 'Más beneficios, más diversión',
      precio_mensual: 120,
      precio_anual: 1200,
      beneficios: [
        'Acceso ilimitado a todas instalaciones',
        'Descuento 20% en restaurante',
        'Prioridad en reservas de canchas',
        'Acceso a todos los eventos',
        '2 invitados al mes',
        'Clases especiales incluidas'
      ],
      recomendado: true
    },
    {
      id: 3,
      nombre: 'Socio Familia',
      descripcion: 'Para toda la familia',
      precio_mensual: 200,
      precio_anual: 2000,
      beneficios: [
        'Acceso ilimitado para 4 personas',
        'Todos los beneficios Socio Activo',
        'Clases de natación para niños',
        'Descuento 25% en restaurante',
        'Hasta 4 invitados al mes',
        'Consulta con nutricionista'
      ],
      recomendado: false
    }
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Planes de Membresía</h1>
          <p className="text-lg text-blue-100">
            Elige el plan que mejor se adapte a ti
          </p>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planes.map((plan) => (
              <div
                key={plan.id}
                className={`card overflow-hidden transform transition-all ${
                  plan.recomendado ? 'ring-2 ring-green-400 scale-105 shadow-xl' : ''
                }`}
              >
                {plan.recomendado && (
                  <div className="bg-green-500 text-white py-2 text-center text-sm font-bold">
                    ⭐ MÁS POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.descripcion}
                  </p>

                  {/* Precio */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-blue-600">
                      ₡{plan.precio_mensual}
                    </div>
                    <p className="text-gray-600 text-sm">
                      por mes o ₡{plan.precio_anual}/año
                    </p>
                  </div>

                  {/* Beneficios */}
                  <ul className="space-y-3 mb-8">
                    {plan.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{beneficio}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/tienda"
                    className={`block text-center font-bold py-3 rounded-lg transition-colors ${
                      plan.recomendado
                        ? 'btn-primary'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    Afiliarse Ahora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitantes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Opción para Visitantes</h2>
          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pase de Día
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  ₡15
                </div>
                <p className="text-gray-600 mb-6">
                  Acceso por un día a todas nuestras instalaciones
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check size={20} className="text-green-500" />
                    Acceso a piscinas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={20} className="text-green-500" />
                    Acceso a canchas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={20} className="text-green-500" />
                    Vestuarios y duchas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={20} className="text-green-500" />
                    Acceso al restaurante
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">Horarios de Visita</h4>
                <div className="space-y-3 text-sm">
                  <p><strong>Lunes - Viernes:</strong> 6:00 AM - 6:00 PM</p>
                  <p><strong>Sábados:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>Domingos:</strong> 8:00 AM - 4:00 PM</p>
                  <p className="text-xs text-gray-600 mt-4 p-3 bg-white rounded">
                    ⚠️ Se requiere identificación válida. Consulta disponibilidad antes de visitar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              {
                q: '¿Puedo cambiar de plan?',
                a: 'Sí, puedes cambiar de plan en cualquier momento con notificación previa de 7 días.'
              },
              {
                q: '¿Hay contrato de permanencia?',
                a: 'Sí, se requiere un compromiso mínimo de 1 año para membresías anuales.'
              },
              {
                q: '¿Qué pasa si deseo cancelar?',
                a: 'Puedes cancelar tu membresía con 30 días de anticipación sin penalidades.'
              },
              {
                q: '¿Hay descuentos para grupos?',
                a: 'Sí, contáctanos para consultar sobre descuentos especiales para grupos de 10+ personas.'
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
