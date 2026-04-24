import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2, CreditCard, ShieldCheck, Sparkles } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

const planes = [
  {
    id: 'individual',
    nombre: 'Membresia Individual',
    precio: 'CRC 65.000',
    descripcion: 'Ideal para quienes quieren entrenar, nadar y reservar con tarifa preferencial.',
    etiqueta: 'Mas elegida',
    beneficios: [
      'Acceso completo a piscinas y gimnasio',
      'Reservas con precio preferencial',
      'Invitaciones a eventos del club'
    ]
  },
  {
    id: 'familiar',
    nombre: 'Membresia Familiar',
    precio: 'CRC 120.000',
    descripcion: 'Pensada para familias que quieren disfrutar el club durante todo el mes.',
    etiqueta: 'Mejor valor',
    beneficios: [
      'Hasta 4 personas incluidas',
      'Actividades recreativas con descuento',
      'Prioridad en eventos familiares'
    ]
  },
  {
    id: 'corporativa',
    nombre: 'Membresia Corporativa',
    precio: 'CRC 185.000',
    descripcion: 'Una opcion flexible para equipos de trabajo y alianzas empresariales.',
    etiqueta: 'Empresas',
    beneficios: [
      'Hasta 8 accesos corporativos',
      'Tarifas especiales para salones',
      'Atencion personalizada'
    ]
  }
]

export default function Tienda() {
  const [seleccionado, setSeleccionado] = useState(planes[1].id)
  const [cliente, setCliente] = useState({ nombre: '', email: '' })
  const [estado, setEstado] = useState({ tipo: 'idle', mensaje: '' })
  const [cargando, setCargando] = useState(false)

  const planActivo = useMemo(
    () => planes.find((plan) => plan.id === seleccionado) || planes[0],
    [seleccionado]
  )

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const checkout = params.get('checkout')

    if (checkout === 'success') {
      setEstado({
        tipo: 'success',
        mensaje: 'Tu pago fue procesado correctamente. En breve te contactaremos para activar la membresia.'
      })
    } else if (checkout === 'cancel') {
      setEstado({
        tipo: 'warning',
        mensaje: 'El proceso de pago fue cancelado. Puedes retomarlo cuando quieras.'
      })
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setCliente((actual) => ({ ...actual, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setCargando(true)
    setEstado({ tipo: 'idle', mensaje: '' })

    try {
      const response = await fetch(`${API_URL}/pagos/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          membresia_id: planActivo.id,
          nombre: cliente.nombre,
          email: cliente.email
        })
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'No fue posible iniciar el checkout')
      }

      if (data.checkout_url) {
        window.location.href = data.checkout_url
        return
      }

      setEstado({
        tipo: 'info',
        mensaje: data.message || 'Checkout preparado en modo demo.'
      })
    } catch (error) {
      setEstado({
        tipo: 'error',
        mensaje: error.message || 'Ocurrio un error al procesar la solicitud.'
      })
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #003AAD 0%, #0061FF 48%, #1DB87B 100%)' }}
      >
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-cyan-300 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
              <Sparkles size={16} />
              Fase 5 en marcha
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Membresias listas para convertirse en una experiencia de compra real
            </h1>
            <p className="max-w-2xl text-lg text-blue-50 md:text-xl">
              Ya puedes presentar planes, capturar datos del cliente y conectar el checkout con Stripe cuando configures la llave secreta del backend.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.9fr] lg:px-8">
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {planes.map((plan) => {
              const activo = plan.id === seleccionado

              return (
                <article
                  key={plan.id}
                  className={`card cursor-pointer p-6 ${activo ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setSeleccionado(plan.id)}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                      {plan.etiqueta}
                    </span>
                    <CheckCircle2 className={activo ? 'text-emerald-500' : 'text-slate-300'} size={20} />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">{plan.nombre}</h2>
                  <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{plan.descripcion}</p>
                  <p className="mb-6 text-3xl font-extrabold text-blue-700 dark:text-cyan-300">{plan.precio}</p>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                    {plan.beneficios.map((beneficio) => (
                      <li key={beneficio} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 text-emerald-500" />
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          <div className="card grid gap-6 p-8 md:grid-cols-3">
            <div>
              <ShieldCheck className="mb-4 text-blue-600" size={28} />
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Checkout preparado</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                El backend ya responde con un flujo de checkout y puede activar Stripe con variables de entorno.
              </p>
            </div>
            <div>
              <CreditCard className="mb-4 text-emerald-600" size={28} />
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Catalogo claro</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                La tienda muestra planes listos para que el usuario compare y elija sin friccion.
              </p>
            </div>
            <div>
              <Sparkles className="mb-4 text-cyan-600" size={28} />
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Base para crecer</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Queda lista la base para sumar carrito, productos fisicos y automatizacion de comprobantes.
              </p>
            </div>
          </div>
        </div>

        <aside className="card h-fit p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Checkout</p>
          <h2 className="mb-2 text-3xl font-extrabold text-slate-900 dark:text-white">{planActivo.nombre}</h2>
          <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">{planActivo.descripcion}</p>

          <div className="mb-6 rounded-2xl bg-slate-100 p-5 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Monto mensual</p>
            <p className="mt-1 text-4xl font-extrabold text-blue-700 dark:text-cyan-300">{planActivo.precio}</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="nombre">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={cliente.nombre}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                placeholder="Ej. Maria Fernandez"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="email">
                Correo electronico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={cliente.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary inline-flex w-full items-center justify-center gap-2"
              disabled={cargando}
            >
              {cargando ? 'Procesando...' : 'Continuar al pago'}
            </button>
          </form>

          {estado.mensaje && (
            <div
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                estado.tipo === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : estado.tipo === 'error'
                    ? 'border-red-200 bg-red-50 text-red-700'
                    : estado.tipo === 'warning'
                      ? 'border-amber-200 bg-amber-50 text-amber-700'
                      : 'border-blue-200 bg-blue-50 text-blue-700'
              }`}
            >
              {estado.mensaje}
            </div>
          )}

          <div className="mt-6 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            Si Stripe no esta configurado todavia, el backend respondera en modo demo para que puedas validar el flujo sin cortar el desarrollo.
          </div>
        </aside>
      </section>
    </div>
  )
}
