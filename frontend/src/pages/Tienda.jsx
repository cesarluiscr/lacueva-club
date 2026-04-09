import { ShoppingCart, Check } from 'lucide-react'
import { useState } from 'react'

export default function Tienda() {
  const [carrito, setCarrito] = useState([])

  const productos = [
    {
      id: 1,
      nombre: 'Membresía Socio Básico - Mensual',
      precio: 60,
      descripcion: 'Acceso a piscinas y gimnasio'
    },
    {
      id: 2,
      nombre: 'Membresía Socio Activo - Mensual',
      precio: 120,
      descripcion: 'Acceso ilimitado a todas instalaciones'
    },
    {
      id: 3,
      nombre: 'Membresía Socio Familia - Mensual',
      precio: 200,
      descripcion: 'Para hasta 4 miembros de la familia'
    },
    {
      id: 4,
      nombre: 'Pase de Visitante - Día',
      precio: 15,
      descripcion: 'Acceso por un día completo'
    }
  ]

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  const total = carrito.reduce((sum, item) => sum + item.precio, 0)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tienda En Línea</h1>
          <p className="text-lg text-blue-100">
            Compra tu membresía ahora
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Productos */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Productos Disponibles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productos.map((producto) => (
                  <div key={producto.id} className="card p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {producto.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {producto.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        ₡{producto.precio}
                      </span>
                      <button
                        onClick={() => agregarCarrito(producto)}
                        className="btn-primary flex items-center gap-2"
                      >
                        <ShoppingCart size={18} />
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrito */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Carrito</h2>
              <div className="card p-6 sticky top-20">
                {carrito.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">
                    Tu carrito está vacío
                  </p>
                ) : (
                  <>
                    <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                      {carrito.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between text-sm pb-3 border-b"
                        >
                          <span className="text-gray-600">{item.nombre}</span>
                          <span className="font-bold">₡{item.precio}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t-2 pt-4">
                      <div className="flex justify-between mb-6">
                        <span className="font-bold">Total:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          ₡{total}
                        </span>
                      </div>
                      <button className="w-full btn-primary font-bold py-3 mb-3">
                        Proceder al Pago
                      </button>
                      <button
                        onClick={() => setCarrito([])}
                        className="w-full border-2 border-red-500 text-red-500 font-bold py-2 rounded-lg hover:bg-red-50"
                      >
                        Vaciar Carrito
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Proceso de Compra</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: 1, title: 'Selecciona', desc: 'Elige el producto' },
              { num: 2, title: 'Agrega', desc: 'Al carrito' },
              { num: 3, title: 'Paga', desc: 'Con Stripe' },
              { num: 4, title: 'Disfruta', desc: 'Tu membresía' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métodos de Pago */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Métodos de Pago</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Tarjeta de Crédito', icon: '💳' },
              { name: 'Transferencia Bancaria', icon: '🏦' },
              { name: 'PayPal', icon: '🔵' }
            ].map((metodo) => (
              <div key={metodo.name} className="card p-6 text-center">
                <div className="text-4xl mb-3">{metodo.icon}</div>
                <h3 className="font-bold text-gray-900">{metodo.name}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Pagos seguros y procesados inmediatamente
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
