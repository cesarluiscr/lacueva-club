import { Phone, MessageCircle, Mail, MapPin, Clock, Share2, Info, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Share2,
      href: 'https://facebook.com/lacuevaclub',
      label: 'Facebook',
      colorClass: 'text-blue-600',
      bgHoverClass: 'hover:bg-blue-700'
    },
    {
      icon: Share2,
      href: 'https://instagram.com/lacuevaclub',
      label: 'Instagram',
      colorClass: 'text-pink-600',
      bgHoverClass: 'hover:bg-pink-700'
    },
    {
      icon: ExternalLink,
      href: 'https://github.com/cesarluiscr/lacueva-club',
      label: 'Repositorio GitHub',
      colorClass: 'text-gray-400',
      bgHoverClass: 'hover:bg-gray-700'
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-lacueva-elegante.png"
                alt="Logo de Club Campestre La Cueva"
                className="h-14 w-auto"
                loading="lazy"
              />
              <div>
                <div className="text-xs font-bold text-blue-400 tracking-widest" style={{letterSpacing: '2px'}}>CLUB CAMPESTRE</div>
                <div style={{
                  fontFamily: "Georgia, 'Playfair Display', serif",
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  fontStyle: 'italic',
                  color: 'white',
                  letterSpacing: '0.5px',
                  lineHeight: '1.2',
                  display: 'block'
                }}>La Cueva</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              55 años de excelencia en Alajuela, Costa Rica.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6" role="navigation" aria-label="Redes sociales del club">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Visita nuestro ${social.label}`}
                    title={`Club Campestre La Cueva en ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 focus:ring-2 focus:ring-green-500 focus:outline-none ${social.bgHoverClass}`}
                  >
                    <Icon size={24} className={social.colorClass} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4 text-white">Contacto</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <a href="tel:24337171" className="text-gray-300 group-hover:text-blue-400 transition">
                  2433-7171
                </a>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition">
                  <MessageCircle size={20} className="text-green-400" />
                </div>
                <a href="https://wa.me/50672434203" className="text-gray-300 group-hover:text-green-400 transition">
                  7243-4203 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 transition">
                  <Mail size={20} className="text-red-400" />
                </div>
                <a href="mailto:info@lacuevasa.com" className="text-gray-300 group-hover:text-red-400 transition">
                  info@lacuevasa.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <span className="text-gray-300">Alajuela, Costa Rica</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/instalaciones" className="hover:text-white">
                  Instalaciones
                </a>
              </li>
              <li>
                <a href="/reservas" className="hover:text-white">
                  Reservas
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Horarios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Lunes - Viernes: 6:00 AM - 9:00 PM</li>
              <li>Sábado: 8:00 AM - 6:00 PM</li>
              <li>Domingo: 8:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Club Campestre La Cueva. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-white mr-4">
              Política de Privacidad
            </a>
            |
            <a href="#" className="hover:text-white ml-4">
              Términos de Servicio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
