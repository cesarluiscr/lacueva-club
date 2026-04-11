import { Link } from 'react-router-dom'
import { ArrowRight, Waves, Users, Trophy, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, #004E89 0%, #FF6B35 100%)'}}>
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
                src="./images/logo-lacueva.jpg"
                alt="Club Campestre La Cueva"
                className="h-24 w-auto drop-shadow-lg"
                loading="lazy"
                onError={(e) => e.target.style.display = 'none'}
              />
              <div>
                <h2 className="text-lg md:text-xl font-bold text-blue-100 tracking-widest mb-2" style={{letterSpacing: '2px'}}>
                  CLUB CAMPESTRE
                </h2>
                <h1 style={{
                  fontFamily: "Georgia, 'Playfair Display', serif",
                  fontSize: '4rem',
                  fontWeight: '700',
                  fontStyle: 'italic',
                  color: 'white',
                  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
                  letterSpacing: '0.5px',
                  lineHeight: '1.2',
                  display: 'block'
                }}>
                  La Cueva
                </h1>
              </div>
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
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Piscina Image */}
          <div className="mb-20 rounded-2xl overflow-hidden shadow-2xl" data-aos="zoom-in">
            <img
              src="./images/piscina-olimpica.jpg"
              alt="Piscina Olímpica"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>

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
                <div
                  key={idx}
                  className="card p-8 text-center group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className={`inline-flex p-5 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 ${
                    idx === 0 ? 'bg-orange-100' : idx === 1 ? 'bg-blue-100' : 'bg-cyan-100'
                  }`}>
                    <Icon size={44} className={`${
                      idx === 0 ? 'text-orange-600' : idx === 1 ? 'text-blue-600' : 'text-cyan-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
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
      <section className="py-24 bg-gray-50 dark:bg-slate-900">
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
                className={`card p-8 ${plan.featured ? 'ring-4 ring-yellow-400 scale-105' : ''}`}
                data-aos="flip-left"
                data-aos-delay={idx * 150}
                style={plan.featured ? {backgroundColor: '#FFF9E6'} : {}}
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
      <section className="py-24 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #FF6B35 0%, #004E89 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para disfrutar?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a nuestra comunidad de socios y disfruta de las mejores instalaciones.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/tienda" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ir a la Tienda
            </Link>
            <Link to="/contacto" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '55', label: 'Años de Historia', color: '#FF6B35' },
              { number: '1000+', label: 'Socios Activos', color: '#F7B801' },
              { number: '10', label: 'Instalaciones', color: '#1AC8ED' },
              { number: '24/7', label: 'Acceso Club', color: '#004E89' }
            ].map((stat, idx) => (
              <div key={idx} data-aos="count-up" data-aos-delay={idx * 100} className="p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-400" style={{borderLeft: `5px solid ${stat.color}`}}>
                <div className="text-5xl font-bold mb-3" style={{color: stat.color}}>
                  {stat.number}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
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
