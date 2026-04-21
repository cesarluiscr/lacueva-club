# 🗄️ Base de Datos - Club Campestre La Cueva

## Configuración de PostgreSQL

### 1. Crear la Base de Datos

```bash
# Conectarse a PostgreSQL
psql -U postgres

# Crear base de datos
CREATE DATABASE lacueva_db;

# Conectarse a la BD
\c lacueva_db

# Salir
\q
```

### 2. Ejecutar Migraciones

Las migraciones deben ejecutarse en orden:

```bash
# En la terminal, dentro de la carpeta database/

# 1. Crear tabla usuarios
psql -U postgres -d lacueva_db -f migrations/001_create_usuarios.sql

# 2. Crear tabla instalaciones
psql -U postgres -d lacueva_db -f migrations/002_create_instalaciones.sql

# 3. Crear tabla reservas
psql -U postgres -d lacueva_db -f migrations/003_create_reservas.sql

# 4. Crear tabla pagos
psql -U postgres -d lacueva_db -f migrations/005_create_pagos.sql
```

### 3. Cargar Datos de Ejemplo (Seeds)

```bash
psql -U postgres -d lacueva_db -f seeds/seed_data.sql
```

## Verificar la Base de Datos

```bash
# Conectarse a la BD
psql -U postgres -d lacueva_db

# Ver todas las tablas
\dt

# Ver estructura de una tabla
\d usuarios

# Ver datos
SELECT * FROM instalaciones;

# Salir
\q
```

## 🔑 Variables de Entorno Necesarias

En el archivo `.env` del backend, asegúrate de tener:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lacueva_db
DB_USER=postgres
DB_PASSWORD=tu_contraseña
```

## 📊 Diagrama ER (Entidad-Relación)

```
usuarios ──────────────┐
   ├─ (1:N) ──────→ reservas ──────→ instalaciones
   └─ (1:N) ──────→ pagos

Key Relationships:
- Usuario → Muchas Reservas
- Usuario → Muchos Pagos
- Instalación → Muchas Reservas
```

## 🔒 Notas de Seguridad

1. **Contraseñas**: Se almacenan hasheadas con bcrypt
2. **Foreign Keys**: Configuradas con restricciones
3. **Índices**: Para optimizar queries frecuentes
4. **Constraints**: Validaciones a nivel BD

## 📝 Tipos de Datos Especiales

- `ENUM`: Para campos con valores predefinidos
- `JSONB`: Para almacenar arrays de beneficios
- `UUID`: Para IDs único y seguro
- `TIMESTAMP`: Para auditoría (created_at, updated_at)

## 🔄 Backups

```bash
# Hacer backup
pg_dump -U postgres lacueva_db > backup_lacueva.sql

# Restaurar desde backup
psql -U postgres lacueva_db < backup_lacueva.sql
```

## 🐛 Troubleshooting

### Error: "role 'postgres' does not exist"
```bash
createuser -P postgres
```

### Error: "database does not exist"
Asegúrate de haber ejecutado el comando CREATE DATABASE

### Error: "permission denied"
Verifica que tu usuario PostgreSQL tenga permisos suficientes

## 📚 Recursos

- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Sequelize ORM](https://sequelize.org/)
- [UUID en PostgreSQL](https://www.postgresql.org/docs/current/uuid-ossp.html)

---

**Última actualización**: Abril 2026
