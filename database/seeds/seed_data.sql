-- Datos de ejemplo para La Cueva

-- Insertar instalaciones
INSERT INTO instalaciones (nombre, descripcion, tipo, capacidad, ubicacion, tarifa_visitante, tarifa_socio, requiere_reserva, estado, horario_apertura, horario_cierre)
VALUES
  ('Piscina Olímpica', 'Piscina de competencia con 50 metros de largo', 'piscina', 300, 'Zona Sur', 15.00, 0, true, 'activa', '06:00:00', '18:00:00'),
  ('Cancha de Fútbol 1', 'Cancha de césped sintético', 'cancha', 22, 'Zona Deportes', 25.00, 10.00, true, 'activa', '07:00:00', '21:00:00'),
  ('Cancha de Fútbol 2', 'Cancha de césped sintético', 'cancha', 22, 'Zona Deportes', 25.00, 10.00, true, 'activa', '07:00:00', '21:00:00'),
  ('Cancha de Tenis 1', 'Cancha con iluminación nocturna', 'cancha', 4, 'Zona Deportes', 20.00, 8.00, true, 'activa', '07:00:00', '21:00:00'),
  ('Cancha de Tenis 2', 'Cancha con iluminación nocturna', 'cancha', 4, 'Zona Deportes', 20.00, 8.00, true, 'activa', '07:00:00', '21:00:00'),
  ('Gimnasio', 'Equipos modernos con entrenadores', 'otro', 50, 'Zona Central', 10.00, 0, false, 'activa', '06:00:00', '21:00:00'),
  ('Salón Principal', 'Salón para eventos y conferencias', 'salon', 200, 'Zona Central', 0, 0, true, 'activa', '08:00:00', '22:00:00'),
  ('Restaurante', 'Restaurante con vista a las instalaciones', 'otro', 100, 'Zona Central', 0, 0, false, 'activa', '11:00:00', '21:00:00');

-- Insertar planes de membresía
INSERT INTO membresias (nombre, descripcion, precio_mensual, precio_anual, limite_invitados, beneficios, duracion_minima_meses, activa, orden)
VALUES
  (
    'Socio Básico',
    'Acceso a piscinas y gimnasio',
    60.00,
    600.00,
    1,
    '["Acceso a piscinas", "Acceso a gimnasio", "Descuento 10% en restaurante", "Acceso a eventos básicos", "1 invitado al mes"]'::jsonb,
    12,
    true,
    1
  ),
  (
    'Socio Activo',
    'Acceso ilimitado a todas las instalaciones',
    120.00,
    1200.00,
    2,
    '["Acceso ilimitado a todas instalaciones", "Descuento 20% en restaurante", "Prioridad en reservas de canchas", "Acceso a todos los eventos", "2 invitados al mes", "Clases especiales incluidas"]'::jsonb,
    12,
    true,
    2
  ),
  (
    'Socio Familia',
    'Membresía para hasta 4 miembros de la familia',
    200.00,
    2000.00,
    4,
    '["Acceso ilimitado para 4 personas", "Todos los beneficios Socio Activo", "Clases de natación para niños", "Descuento 25% en restaurante", "Hasta 4 invitados al mes", "Consulta con nutricionista"]'::jsonb,
    12,
    true,
    3
  );

-- Insertar usuario admin de ejemplo
INSERT INTO usuarios (nombre, apellido, email, password, telefono, rol, estado, verificado)
VALUES
  ('Admin', 'La Cueva', 'admin@lacueva.cr', '$2a$10$YfUx7qkZA1Q3K4N5L6M7N8P9Q0R1S2T3U4V5W6X7Y8Z9A0B1C2D3E4', '2433-7171', 'admin', 'activo', true);

-- Insertar usuario de ejemplo
INSERT INTO usuarios (nombre, apellido, email, password, telefono, rol, estado, verificado)
VALUES
  ('Juan', 'Pérez', 'juan@example.com', '$2a$10$YfUx7qkZA1Q3K4N5L6M7N8P9Q0R1S2T3U4V5W6X7Y8Z9A0B1C2D3E4', '8765-4321', 'socio', 'activo', true);

-- Verificar inserción
SELECT 'Instalaciones insertadas:' as info, COUNT(*) FROM instalaciones;
SELECT 'Membresías insertadas:' as info, COUNT(*) FROM membresias;
SELECT 'Usuarios insertados:' as info, COUNT(*) FROM usuarios;
