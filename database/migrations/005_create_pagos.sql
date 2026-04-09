-- Crear tabla pagos
CREATE TABLE pagos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  monto DECIMAL(10, 2) NOT NULL,
  concepto VARCHAR(255) NOT NULL,
  estado ENUM('pendiente', 'completado', 'fallido', 'reembolsado') DEFAULT 'pendiente',
  metodo_pago ENUM('tarjeta', 'transferencia', 'paypal', 'efectivo'),
  referencia_externa VARCHAR(255),
  descripcion TEXT,
  comprobante_url VARCHAR(500),
  pagado_en TIMESTAMP,
  reembolsado_en TIMESTAMP,
  razon_reembolso VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_pagos_usuario ON pagos(usuario_id);
CREATE INDEX idx_pagos_estado ON pagos(estado);
CREATE INDEX idx_pagos_fecha ON pagos(created_at);
CREATE INDEX idx_pagos_referencia ON pagos(referencia_externa);
