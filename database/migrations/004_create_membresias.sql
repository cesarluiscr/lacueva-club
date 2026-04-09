-- Crear tabla membresias
CREATE TABLE membresias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(255) NOT NULL UNIQUE,
  descripcion TEXT,
  precio_mensual DECIMAL(10, 2) NOT NULL,
  precio_anual DECIMAL(10, 2),
  limite_invitados INTEGER DEFAULT 0,
  beneficios JSONB DEFAULT '[]'::jsonb,
  duracion_minima_meses INTEGER DEFAULT 12,
  activa BOOLEAN DEFAULT TRUE,
  orden INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla socio_membresias (relación M:N)
CREATE TABLE socio_membresias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  membresia_id UUID NOT NULL REFERENCES membresias(id) ON DELETE RESTRICT,
  fecha_inicio TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_vencimiento TIMESTAMP NOT NULL,
  estado ENUM('activa', 'vencida', 'suspendida', 'cancelada') DEFAULT 'activa',
  renovacion_automatica BOOLEAN DEFAULT TRUE,
  invitados_usados INTEGER DEFAULT 0,
  notas TEXT,
  precio_pagado DECIMAL(10, 2),
  cancelada_en TIMESTAMP,
  razon_cancelacion VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_socio_membresias_usuario ON socio_membresias(usuario_id);
CREATE INDEX idx_socio_membresias_membresia ON socio_membresias(membresia_id);
CREATE INDEX idx_socio_membresias_estado ON socio_membresias(estado);
CREATE INDEX idx_socio_membresias_fecha_vencimiento ON socio_membresias(fecha_vencimiento);
