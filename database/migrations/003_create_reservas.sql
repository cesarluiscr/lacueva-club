-- Crear tabla reservas
CREATE TABLE reservas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  instalacion_id UUID NOT NULL REFERENCES instalaciones(id) ON DELETE RESTRICT,
  fecha DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fin TIME NOT NULL,
  estado ENUM('pendiente', 'confirmada', 'cancelada', 'completada') DEFAULT 'pendiente',
  costo DECIMAL(10, 2) NOT NULL,
  deposito_seguridad DECIMAL(10, 2) DEFAULT 0,
  notas TEXT,
  numero_asistentes INTEGER DEFAULT 1,
  confirmada_en TIMESTAMP,
  cancelada_en TIMESTAMP,
  razon_cancelacion VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_reservas_usuario ON reservas(usuario_id);
CREATE INDEX idx_reservas_instalacion ON reservas(instalacion_id);
CREATE INDEX idx_reservas_fecha ON reservas(fecha);
CREATE INDEX idx_reservas_estado ON reservas(estado);
CREATE UNIQUE INDEX idx_reservas_unique_horario ON reservas(instalacion_id, fecha, hora_inicio)
  WHERE estado != 'cancelada';
