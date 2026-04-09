import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-lacueva.png"
                alt="Club Campestre La Cueva"
                className="h-10 w-auto"
                onError={(e) => e.target.style.display = 'none'}
              />
              <div>
                <div className="text-xs font-bold text-blue-400">Club Campestre</div>
                <div className="logo-text text-white text-lg leading-tight">La Cueva</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              55 años de excelencia en Alajuela, Costa Rica.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:24337171" className="hover:text-white">
                  2433-7171
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-blue-400" />
                <a href="https://wa.me/50672434203" className="hover:text-white">
                  7243-4203 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:info@lacuevasa.com" className="hover:text-white">
                  info@lacuevasa.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-400" />
                <span>Alajuela, Costa Rica</span>
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
