-- Crear tabla usuarios
CREATE TABLE usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  rol ENUM('socio', 'visitante', 'admin') NOT NULL DEFAULT 'socio',
  estado ENUM('activo', 'inactivo', 'suspendido') NOT NULL DEFAULT 'activo',
  fecha_afiliacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ultimo_login TIMESTAMP,
  verificado BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_rol ON usuarios(rol);
CREATE INDEX idx_usuarios_estado ON usuarios(estado);
