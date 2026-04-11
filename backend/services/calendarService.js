const { google } = require('googleapis');

// Configurar OAuth2
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

// Establecer token si está disponible
if (process.env.GOOGLE_REFRESH_TOKEN) {
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  });
}

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

/**
 * Crear evento en Google Calendar
 */
exports.crearEvento = async (reserva, usuario, instalacion) => {
  try {
    if (!process.env.GOOGLE_CALENDAR_ID || !process.env.GOOGLE_CLIENT_ID) {
      console.log('📅 [MOCK] Evento de Google Calendar no configurado');
      return null;
    }

    const event = {
      summary: `Reserva: ${instalacion.nombre}`,
      description: `Reserva a nombre de ${usuario.nombre}\nEmail: ${usuario.email}\nTeléfono: ${usuario.telefono || 'No proporcionado'}\n\nDetalles: ${instalacion.descripcion || ''}`,
      start: {
        dateTime: new Date(`${reserva.fecha}T${reserva.hora_inicio}`).toISOString(),
        timeZone: 'America/Costa_Rica',
      },
      end: {
        dateTime: new Date(`${reserva.fecha}T${reserva.hora_fin}`).toISOString(),
        timeZone: 'America/Costa_Rica',
      },
      location: `Club Campestre La Cueva, Alajuela, Costa Rica`,
      attendees: [
        { email: usuario.email },
        { email: process.env.GOOGLE_CALENDAR_EMAIL || 'info@lacuevasa.com' }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 día antes
          { method: 'popup', minutes: 30 } // 30 minutos antes
        ]
      },
      status: 'confirmed'
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      resource: event,
      sendUpdates: 'all'
    });

    console.log(`✅ Evento creado en Google Calendar: ${response.data.htmlLink}`);
    return response.data;
  } catch (error) {
    console.error('❌ Error creando evento en Google Calendar:', error.message);
    return null;
  }
};

/**
 * Actualizar evento en Google Calendar
 */
exports.actualizarEvento = async (eventId, reserva, usuario, instalacion) => {
  try {
    if (!process.env.GOOGLE_CALENDAR_ID || !eventId) {
      console.log('📅 [MOCK] Actualización de evento no configurada');
      return null;
    }

    const event = {
      summary: `Reserva: ${instalacion.nombre}`,
      description: `Reserva a nombre de ${usuario.nombre}\nEmail: ${usuario.email}`,
      start: {
        dateTime: new Date(`${reserva.fecha}T${reserva.hora_inicio}`).toISOString(),
        timeZone: 'America/Costa_Rica',
      },
      end: {
        dateTime: new Date(`${reserva.fecha}T${reserva.hora_fin}`).toISOString(),
        timeZone: 'America/Costa_Rica',
      },
      location: `Club Campestre La Cueva, Alajuela, Costa Rica`,
    };

    const response = await calendar.events.update({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      eventId: eventId,
      resource: event,
      sendUpdates: 'all'
    });

    console.log(`✅ Evento actualizado en Google Calendar`);
    return response.data;
  } catch (error) {
    console.error('❌ Error actualizando evento en Google Calendar:', error.message);
    return null;
  }
};

/**
 * Eliminar evento de Google Calendar
 */
exports.eliminarEvento = async (eventId) => {
  try {
    if (!process.env.GOOGLE_CALENDAR_ID || !eventId) {
      console.log('📅 [MOCK] Eliminación de evento no configurada');
      return null;
    }

    await calendar.events.delete({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      eventId: eventId,
      sendUpdates: 'all'
    });

    console.log(`✅ Evento eliminado de Google Calendar`);
    return true;
  } catch (error) {
    console.error('❌ Error eliminando evento de Google Calendar:', error.message);
    return null;
  }
};

/**
 * Obtener disponibilidad del calendario
 */
exports.obtenerDisponibilidad = async (fecha, instalacionId) => {
  try {
    if (!process.env.GOOGLE_CALENDAR_ID) {
      console.log('📅 [MOCK] Verificación de disponibilidad no configurada');
      return { disponible: true };
    }

    const response = await calendar.freebusy.query({
      resource: {
        timeMin: new Date(fecha).toISOString(),
        timeMax: new Date(new Date(fecha).getTime() + 24 * 60 * 60 * 1000).toISOString(),
        items: [{ id: process.env.GOOGLE_CALENDAR_ID }]
      }
    });

    const busy = response.data.calendars[process.env.GOOGLE_CALENDAR_ID].busy;

    console.log(`📅 Verificación de disponibilidad para ${fecha}`);
    return { disponible: busy.length === 0, conflictos: busy };
  } catch (error) {
    console.error('❌ Error verificando disponibilidad:', error.message);
    return { disponible: true, error: true };
  }
};

/**
 * Generar URL de Google Calendar para agendar
 */
exports.generarURLCalendarAgendar = (reserva, usuario, instalacion) => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Reserva: ${instalacion.nombre}`,
    dates: `${reserva.fecha.replace(/-/g, '')}T${reserva.hora_inicio.replace(/:/g, '')}00/${reserva.fecha.replace(/-/g, '')}T${reserva.hora_fin.replace(/:/g, '')}00`,
    location: 'Club Campestre La Cueva, Alajuela, Costa Rica',
    description: `Reserva a nombre de ${usuario.nombre}\nEmail: ${usuario.email}`,
    ctz: 'America/Costa_Rica'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};
