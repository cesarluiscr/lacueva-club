import { useState } from 'react'
import { LogIn, UserPlus } from 'lucide-react'

export default function SociosPortal() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    telefono: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Formulario enviado. Pronto recibirás confirmación.')
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Portal de Socios</h1>
          <p className="text-lg text-blue-100">
            Accede a tu cuenta y gestiona tus reservas
          </p>
        </div>
      </section>

      {/* Auth Forms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b">
              <button
                onClick={() => setIsLogin(true)}
                className={`pb-4 font-bold transition ${
                  isLogin
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600'
                }`}
              >
                <LogIn size={20} className="inline mr-2" />
                Iniciar Sesión
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`pb-4 font-bold transition ${
                  !isLogin
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600'
                }`}
              >
                <UserPlus size={20} className="inline mr-2" />
                Registrarse
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      placeholder="Tu apellido"
                      value={formData.apellido}
                      onChange={(e) =>
                        setFormData({ ...formData, apellido: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="Tu teléfono"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-3"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
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
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <button type="submit" className="w-full btn-primary font-bold py-3">
                {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
              </button>
            </form>

            {isLogin && (
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            En tu Portal podrás:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Ver tu Perfil',
                description: 'Gestiona tu información personal y de contacto'
              },
              {
                title: 'Mis Reservas',
                description: 'Visualiza y administra todas tus reservas'
              },
              {
                title: 'Estado de Cuenta',
                description: 'Revisa movimientos y pagos realizados'
              },
              {
                title: 'Documentos',
                description: 'Descarga estatutos, avisos y documentos importantes'
              },
              {
                title: 'Mi Invitados',
                description: 'Administra quién puede acompañarte al club'
              }
            ].map((feature, idx) => (
              <div key={idx} className="card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
