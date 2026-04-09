import { Link } from 'react-router-dom'
import { ArrowRight, Waves, Users, Trophy, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-600 to-blue-400 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="white" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
              <img
                src="/images/logo-lacueva.png"
                alt="Club Campestre La Cueva"
                className="h-24 w-auto drop-shadow-lg"
                onError={(e) => e.target.style.display = 'none'}
              />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Club Campestre<br/>La Cueva
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8 animate-slide-up">
              Vive una experiencia única con nuestras instalaciones de clase mundial en Alajuela.
              Piscinas, canchas, gimnasio, restaurante y mucho más.
            </p>
            <div className="flex gap-4 animate-slide-up">
              <Link
                to="/membresias"
                className="btn-primary inline-flex items-center gap-2"
              >
                Conoce Nuestras Membresías
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/reservas"
                className="btn-ghost"
              >
                Reservar Ahora
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-xl text-gray-600">
              Cuenta con bellísimas instalaciones para toda la familia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Waves,
                title: 'Piscinas',
                description: 'Piscina olímpica de 50 metros y áreas de recreación'
              },
              {
                icon: Trophy,
                title: 'Canchas Deportivas',
                description: 'Fútbol, tenis y otras disciplinas con equipamiento profesional'
              },
              {
                icon: Heart,
                title: 'Gimnasio',
                description: 'Equipos modernos y entrenadores certificados disponibles'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="card p-8 text-center hover:scale-105 transition-transform">
                  <Icon size={48} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/instalaciones"
              className="btn-primary inline-flex items-center gap-2"
            >
              Ver Todas las Instalaciones
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planes de Membresía
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra el plan perfecto para ti y tu familia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Socio Básico',
                price: '₡60',
                period: '/mes',
                color: 'border-blue-200',
                features: ['Acceso a piscinas', 'Acceso a gimnasio', 'Descuento en restaurante']
              },
              {
                name: 'Socio Activo',
                price: '₡120',
                period: '/mes',
                color: 'border-green-200',
                featured: true,
                features: ['Acceso ilimitado', 'Prioridad en reservas', 'Acceso a eventos']
              },
              {
                name: 'Familia',
                price: '₡200',
                period: '/mes',
                color: 'border-yellow-200',
                features: ['Hasta 4 personas', 'Todos los beneficios', 'Clases para niños']
              }
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`card p-8 border-l-4 ${plan.color} ${plan.featured ? 'ring-2 ring-green-400 scale-105' : ''}`}
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary">
                  Afiliarse Ahora
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/membresias"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Ver Detalles Completos
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para disfrutar?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a nuestra comunidad de socios y disfruta de las mejores instalaciones.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/tienda" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Ir a la Tienda
            </Link>
            <Link to="/contacto" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '55', label: 'Años de Historia' },
              { number: '1000+', label: 'Socios Activos' },
              { number: '10', label: 'Instalaciones' },
              { number: '24/7', label: 'Acceso Club' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
