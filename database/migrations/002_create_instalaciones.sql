-- Crear tabla instalaciones
CREATE TABLE instalaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(255) NOT NULL UNIQUE,
  descripcion TEXT,
  tipo ENUM('piscina', 'cancha', 'salon', 'otro') NOT NULL,
  capacidad INTEGER NOT NULL CHECK (capacidad > 0),
  ubicacion VARCHAR(255),
  imagen_url VARCHAR(500),
  tarifa_visitante DECIMAL(10, 2) DEFAULT 0,
  tarifa_socio DECIMAL(10, 2) DEFAULT 0,
  requiere_reserva BOOLEAN DEFAULT TRUE,
  estado ENUM('activa', 'mantenimiento', 'cerrada') DEFAULT 'activa',
  horario_apertura TIME DEFAULT '06:00:00',
  horario_cierre TIME DEFAULT '21:00:00',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_instalaciones_tipo ON instalaciones(tipo);
CREATE INDEX idx_instalaciones_estado ON instalaciones(estado);
