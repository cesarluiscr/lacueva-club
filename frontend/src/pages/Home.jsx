import { Link } from 'react-router-dom'
import { ArrowRight, Waves, Users, Trophy, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, #003AAD 0%, #0061FF 55%, #1DB87B 100%)'}}>
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
            <div className="flex items-center gap-6 mb-6 animate-fade-in">
              <img
                src="/images/logo-lacueva-elegante.png"
                alt="Logo de Club Campestre La Cueva - Árbol dorado elegante"
                className="h-32 w-auto drop-shadow-lg"
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
                to="/reservas"
                className="btn-primary inline-flex items-center gap-2"
                aria-label="Reservar una cancha o salón"
              >
                Reservar Ahora
                <ArrowRight size={20} aria-hidden="true" />
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
          <figure className="mb-20 rounded-2xl overflow-hidden shadow-2xl" data-aos="zoom-in">
            <img
              src="/images/piscina-olimpica.jpg"
              alt="Piscina Olímpica de 50 metros - Club Campestre La Cueva"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => e.target.style.display = 'none'}
            />
            <figcaption className="sr-only">Piscina Olímpica de 50 metros del Club Campestre La Cueva</figcaption>
          </figure>

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
                description: 'Piscina olímpica de 50 metros y áreas de recreación',
                image: '/images/piscina.jpg'
              },
              {
                icon: Trophy,
                title: 'Canchas Deportivas',
                description: 'Fútbol, tenis y otras disciplinas con equipamiento profesional',
                image: '/images/canchas.jpg'
              },
              {
                icon: Heart,
                title: 'Gimnasio',
                description: 'Equipos modernos y entrenadores certificados disponibles',
                image: '/images/gimnasio.jpg'
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
                  <div className={`inline-flex p-5 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 ${feature.image ? 'mb-4' : ''} ${
                    idx === 0 ? 'bg-blue-100' : idx === 1 ? 'bg-emerald-100' : 'bg-cyan-100'
                  }`}>
                    {feature.image ? (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-16 h-16 object-cover rounded-xl"
                        loading="lazy"
                      />
                    ) : (
                      <Icon size={44} className={`${
                        idx === 0 ? 'text-blue-600' : idx === 1 ? 'text-emerald-600' : 'text-cyan-600'
                      }`} />
                    )}
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

      {/* CTA Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0061FF 0%, #06B6D4 50%, #1DB87B 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para disfrutar?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a nuestra comunidad y disfruta de las mejores instalaciones.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contacto" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Noticias Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Noticias y Eventos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Mantente informado sobre lo que sucede en el club
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: 'Abril 2026',
                title: 'Inauguración del nuevo gimnasio',
                description: 'Equipos modernos y entrenadores certificados disponibles para todos nuestros visitantes.',
                image: '/images/piscina-olimpica.jpg'
              },
              {
                date: 'Marzo 2026',
                title: 'Torneo de Tenis 2026',
                description: 'Participación de equipos de toda la región. Premiación para los ganadores.',
                image: '/images/piscina-olimpica.jpg'
              },
              {
                date: 'Febrero 2026',
                title: 'Clases de natación para niños',
                description: 'Programa especial de verano con instructores certificados. Inscripciones abiertas.',
                image: '/images/piscina-olimpica.jpg'
              }
            ].map((news, idx) => (
              <article
                key={idx}
                className="card overflow-hidden hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <img
                  src={news.image}
                  alt={`Noticia: ${news.title}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <div className="p-6">
                  <time className="text-sm text-blue-600 font-semibold">{news.date}</time>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {news.description}
                  </p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-green-600 transition">
                    Leer más →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="btn-secondary inline-flex items-center gap-2"
              aria-label="Ver todas las noticias del club"
            >
              Ver Todas las Noticias
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '55', label: 'Años de Historia', color: '#0061FF' },
              { number: '1000+', label: 'Visitantes Felices', color: '#1DB87B' },
              { number: '10', label: 'Instalaciones', color: '#06B6D4' },
              { number: '24/7', label: 'Acceso Club', color: '#003AAD' }
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
