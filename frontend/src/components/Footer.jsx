import { Phone, MessageCircle, Mail, MapPin, Heart, Share2, Eye } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Heart, href: '#', label: 'Síguenos', colorClass: 'text-red-400' },
    { icon: Share2, href: '#', label: 'Compartir', colorClass: 'text-blue-400' },
    { icon: Eye, href: '#', label: 'Visitar', colorClass: 'text-cyan-400' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 240"
                className="h-10 w-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="tree">
                  <ellipse cx="60" cy="40" rx="8" ry="12" fill="white" transform="rotate(-35 60 40)" opacity="0.9"/>
                  <ellipse cx="100" cy="35" rx="8" ry="12" fill="white" transform="rotate(0 100 35)" opacity="0.95"/>
                  <ellipse cx="140" cy="40" rx="8" ry="12" fill="white" transform="rotate(35 140 40)" opacity="0.9"/>
                  <rect x="95" y="125" width="10" height="60" fill="white" rx="5"/>
                </g>
              </svg>
              <div>
                <div className="text-xs font-bold text-blue-400">Club Campestre</div>
                <div className="text-lg leading-tight font-bold text-cyan-400">La Cueva</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              55 años de excelencia en Alajuela, Costa Rica.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    className="text-gray-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                  >
                    <Icon size={20} className={social.colorClass} />
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
                <a href="/membresias" className="hover:text-white">
                  Membresías
                </a>
              </li>
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
