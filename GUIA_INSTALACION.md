# 🚀 Guía de Instalación - Club Campestre La Cueva

## Requisitos Previos

- Node.js v16+ ([Descargar](https://nodejs.org/))
- PostgreSQL v12+ ([Descargar](https://www.postgresql.org/))
- Git
- Visual Studio Code (opcional pero recomendado)

## 📦 Instalación del Proyecto

### 1. Clonar o Descargar el Proyecto

```bash
cd C:\Users\Usuario\OneDrive\Escritorio
cd lacueva-club
```

### 2. Configurar Backend

```bash
cd backend

# Copiar archivo de configuración
copy .env.example .env

# Instalar dependencias
npm install

# NOTA: Configurar variables de entorno en .env
# - Base de datos
# - JWT_SECRET
# - Stripe API keys
# - SendGrid API key
```

### 3. Configurar Base de Datos

```bash
# Crear base de datos (en PostgreSQL)
psql -U postgres
CREATE DATABASE lacueva_db;
\q

# Ejecutar migraciones (cuando estén listas)
npm run migrate
```

### 4. Iniciar Backend

```bash
npm run dev
# Backend corriendo en http://localhost:3000
```

### 5. Configurar Frontend

En otra terminal:

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# Frontend corriendo en http://localhost:5173
```

## 🔧 Configuración de Variables de Entorno

### Backend (.env)

```env
# Servidor
NODE_ENV=development
PORT=3000

# Base de Datos
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lacueva_db
DB_USER=postgres
DB_PASSWORD=tu_contraseña

# JWT
JWT_SECRET=tu_jwt_secret_muy_largo_y_seguro
JWT_EXPIRATION=7d

# Frontend
FRONTEND_URL=http://localhost:5173

# Stripe (para pagos)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...

# SendGrid (para emails)
SENDGRID_API_KEY=tu_api_key
SENDGRID_FROM_EMAIL=noreply@lacueva.cr

# Admin
ADMIN_EMAIL=admin@lacueva.cr
```

## 🏗️ Estructura del Proyecto

```
lacueva-club/
├── backend/                 # API REST Node.js
│   ├── routes/             # Rutas API
│   ├── models/             # Modelos de BD (Sequelize)
│   ├── middleware/         # Autenticación, validación
│   ├── controllers/        # Lógica de negocio
│   ├── config/             # Configuración
│   ├── server.js           # Entrada principal
│   └── package.json
│
├── frontend/               # Aplicación React
│   ├── src/
│   │   ├── pages/         # Páginas principales
│   │   ├── components/    # Componentes reutilizables
│   │   ├── utils/         # Utilidades
│   │   ├── App.jsx        # Componente raíz
│   │   └── index.css      # Estilos globales
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── database/              # Scripts de BD
│   ├── migrations/
│   └── seeds/
│
├── docs/                  # Documentación
└── README.md
```

## 🧪 Testing

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 📝 Endpoints principales de API

### Autenticación
- `POST /api/auth/registro` - Crear cuenta
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/logout` - Cerrar sesión
- `GET /api/auth/me` - Perfil actual

### Instalaciones
- `GET /api/instalaciones` - Listar todas
- `GET /api/instalaciones/:id` - Detalles

### Reservas
- `GET /api/reservas` - Mis reservas
- `POST /api/reservas` - Crear reserva
- `GET /api/reservas/disponibilidad/:id` - Horarios disponibles
- `PUT /api/reservas/:id` - Actualizar
- `DELETE /api/reservas/:id` - Cancelar

### Membresías
- `GET /api/membresias` - Listar planes
- `GET /api/membresias/:id` - Detalles

### Socios
- `GET /api/socios/perfil` - Mi perfil
- `PUT /api/socios/perfil` - Actualizar perfil
- `GET /api/socios/membresias` - Mis membresías
- `GET /api/socios/documentos` - Descargar documentos
- `GET /api/socios/estado-cuenta` - Estado de cuenta

### Pagos
- `POST /api/pagos/checkout` - Crear sesión pago
- `GET /api/pagos/historial` - Historial de pagos
- `POST /api/pagos/refund` - Procesar reembolso

### Admin
- `GET /api/admin/dashboard` - Estadísticas
- `GET /api/admin/socios` - Listar socios
- `GET /api/admin/reservas` - Ver todas las reservas
- `GET /api/admin/reportes/ingresos` - Reporte ingresos

## 🌐 Deployment

### Heroku (Recomendado para MVP)

```bash
# Instalar Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Crear app
heroku create lacueva-club

# Variables de entorno
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=...

# Deploy
git push heroku main
```

### DigitalOcean / AWS

Ver documentación específica en /docs

## 📞 Soporte

- **Teléfono**: 2433-7171
- **WhatsApp**: 7243-4203
- **Email**: info@lacuevasa.com

## ⚠️ Próximos Pasos

- [ ] Crear modelos de BD en Sequelize
- [ ] Implementar autenticación JWT completa
- [ ] Integrar Stripe para pagos
- [ ] Configurar SendGrid para emails
- [ ] Tests automatizados
- [ ] Documentación API (Swagger)
- [ ] CI/CD pipeline
- [ ] Implementar panel admin
- [ ] App móvil (React Native)

## 📚 Recursos Útiles

- [React Router](https://reactrouter.com/)
- [Express.js](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sequelize ORM](https://sequelize.org/)
- [Stripe API](https://stripe.com/docs/api)
- [SendGrid](https://sendgrid.com/docs/)

---

**Última actualización**: Abril 2026
