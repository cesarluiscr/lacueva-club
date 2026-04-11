const nodemailer = require('nodemailer');

// Configurar transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Fallback si las credenciales no están configuradas
const isEmailConfigured = () => {
  return process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;
};

/**
 * Enviar email de bienvenida
 */
exports.enviarBienvenida = async (usuario) => {
  try {
    if (!isEmailConfigured()) {
      console.log(`📧 [MOCK] Email de bienvenida a ${usuario.email}`);
      return;
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF6B35;">¡Bienvenido a Club Campestre La Cueva!</h2>
        <p>Hola ${usuario.nombre || usuario.email},</p>
        <p>Gracias por registrarte en nuestro club. Estamos emocionados de tenerte como parte de nuestra comunidad.</p>
        <p>Con tu cuenta podrás:</p>
        <ul>
          <li>Realizar reservas en nuestras instalaciones</li>
          <li>Acceder a tu portal de socio</li>
          <li>Ver tus membresías activas</li>
          <li>Descargar documentos importantes</li>
        </ul>
        <p style="margin-top: 30px; color: #888;">Club Campestre La Cueva<br>Alajuela, Costa Rica<br>info@lacuevasa.com</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Club Campestre La Cueva" <${process.env.EMAIL_USER}>`,
      to: usuario.email,
      subject: '¡Bienvenido a Club Campestre La Cueva!',
      html: html
    });

    console.log(`✅ Email de bienvenida enviado a ${usuario.email}`);
  } catch (error) {
    console.error('❌ Error enviando email de bienvenida:', error.message);
  }
};

/**
 * Enviar confirmación de reserva
 */
exports.enviarConfirmacionReserva = async (usuario, reserva, instalacion) => {
  try {
    if (!isEmailConfigured()) {
      console.log(`📧 [MOCK] Confirmación de reserva enviada a ${usuario.email}`);
      return;
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #004E89;">Reserva Confirmada</h2>
        <p>Hola ${usuario.nombre || usuario.email},</p>
        <p>Tu reserva ha sido confirmada exitosamente.</p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Instalación:</strong> ${instalacion.nombre}</p>
          <p><strong>Fecha:</strong> ${new Date(reserva.fecha).toLocaleDateString('es-CR')}</p>
          <p><strong>Hora:</strong> ${reserva.hora_inicio} - ${reserva.hora_fin}</p>
          <p><strong>Referencia:</strong> #${reserva.id}</p>
        </div>

        <p>Por favor llega 10 minutos antes de la hora programada.</p>
        <p style="margin-top: 30px; color: #888;">Club Campestre La Cueva<br>Teléfono: 2433-7171<br>WhatsApp: 7243-4203</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Club Campestre La Cueva" <${process.env.EMAIL_USER}>`,
      to: usuario.email,
      subject: `Reserva Confirmada - ${instalacion.nombre}`,
      html: html
    });

    console.log(`✅ Confirmación de reserva enviada a ${usuario.email}`);
  } catch (error) {
    console.error('❌ Error enviando confirmación de reserva:', error.message);
  }
};

/**
 * Enviar recordatorio de reserva
 */
exports.enviarRecordatorio = async (usuario, reserva, instalacion) => {
  try {
    if (!isEmailConfigured()) {
      console.log(`📧 [MOCK] Recordatorio de reserva enviado a ${usuario.email}`);
      return;
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #F7B801;">Recordatorio de Reserva</h2>
        <p>Hola ${usuario.nombre || usuario.email},</p>
        <p>Te recordamos tu reserva para mañana:</p>

        <div style="background-color: #fff9e6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Instalación:</strong> ${instalacion.nombre}</p>
          <p><strong>Hora:</strong> ${reserva.hora_inicio} - ${reserva.hora_fin}</p>
          <p><strong>¡No olvides llegar a tiempo!</strong></p>
        </div>

        <p style="margin-top: 30px; color: #888;">Club Campestre La Cueva</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Club Campestre La Cueva" <${process.env.EMAIL_USER}>`,
      to: usuario.email,
      subject: `Recordatorio: Tu reserva en ${instalacion.nombre}`,
      html: html
    });

    console.log(`✅ Recordatorio de reserva enviado a ${usuario.email}`);
  } catch (error) {
    console.error('❌ Error enviando recordatorio:', error.message);
  }
};

/**
 * Enviar confirmación de pago
 */
exports.enviarConfirmacionPago = async (usuario, pago) => {
  try {
    if (!isEmailConfigured()) {
      console.log(`📧 [MOCK] Confirmación de pago enviada a ${usuario.email}`);
      return;
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00AA66;">Pago Confirmado</h2>
        <p>Hola ${usuario.nombre || usuario.email},</p>
        <p>Tu pago ha sido procesado exitosamente.</p>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Concepto:</strong> ${pago.concepto}</p>
          <p><strong>Monto:</strong> ₡${parseFloat(pago.monto).toLocaleString('es-CR')}</p>
          <p><strong>Transacción:</strong> #${pago.id}</p>
          <p><strong>Fecha:</strong> ${new Date(pago.createdAt).toLocaleDateString('es-CR')}</p>
        </div>

        <p>Gracias por tu confianza en Club Campestre La Cueva.</p>
        <p style="margin-top: 30px; color: #888;">Club Campestre La Cueva</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Club Campestre La Cueva" <${process.env.EMAIL_USER}>`,
      to: usuario.email,
      subject: 'Confirmación de Pago',
      html: html
    });

    console.log(`✅ Confirmación de pago enviada a ${usuario.email}`);
  } catch (error) {
    console.error('❌ Error enviando confirmación de pago:', error.message);
  }
};

/**
 * Enviar cancelación de reserva
 */
exports.enviarCancelacionReserva = async (usuario, reserva, instalacion) => {
  try {
    if (!isEmailConfigured()) {
      console.log(`📧 [MOCK] Cancelación de reserva enviada a ${usuario.email}`);
      return;
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF6B35;">Reserva Cancelada</h2>
        <p>Hola ${usuario.nombre || usuario.email},</p>
        <p>Tu reserva ha sido cancelada.</p>

        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Instalación:</strong> ${instalacion.nombre}</p>
          <p><strong>Fecha Original:</strong> ${new Date(reserva.fecha).toLocaleDateString('es-CR')}</p>
          <p><strong>Referencia:</strong> #${reserva.id}</p>
        </div>

        <p>Si deseas hacer una nueva reserva, por favor visita nuestro portal.</p>
        <p style="margin-top: 30px; color: #888;">Club Campestre La Cueva</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Club Campestre La Cueva" <${process.env.EMAIL_USER}>`,
      to: usuario.email,
      subject: 'Cancelación de Reserva',
      html: html
    });

    console.log(`✅ Cancelación de reserva enviada a ${usuario.email}`);
  } catch (error) {
    console.error('❌ Error enviando cancelación:', error.message);
  }
};

/**
 * Enviar token de recuperación
 */
exports.enviarTokenRecuperacion = async (usuario, token) => {
  try {
    if (!isEmailConfigured()) {
      const enlace = `${process.env.FRONTEND_URL || 'https://cesarluiscr.github.io/lacueva-club'}/recuperar-contrasena?token=${token}`;
      console.log(`📧 [MOCK] Token de recuperación enviado a ${usuario.email}`);
      console.log(`   Enlace: ${enlace}`);
      return;
    }

    const enlace = `${process.env.FRONTEND_URL || 'https://cesarluiscr.github.io/lacueva-club'}/recuperar-contrasena?token=${token}`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #004E89;">Recuperar Contraseña</h2>
        <p>Hola ${usuario.nombre || usuario.email},</p>
        <p>Recibimos una solicitud para recuperar tu contraseña.</p>

        <p style="text-align: center; margin: 30px 0;">
          <a href="${enlace}" style="background-color: #FF6B35; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block;">Recuperar Contraseña</a>
        </p>

        <p>O copia y pega este enlace en tu navegador:</p>
        <p style="word-break: break-all; color: #0066CC;"><small>${enlace}</small></p>

        <p style="color: #888; font-size: 12px; margin-top: 30px;">Este enlace expira en 24 horas. Si no solicitaste esta recuperación, ignora este email.</p>
        <p style="color: #888;">Club Campestre La Cueva</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Club Campestre La Cueva" <${process.env.EMAIL_USER}>`,
      to: usuario.email,
      subject: 'Recuperar tu contraseña - Club Campestre La Cueva',
      html: html
    });

    console.log(`✅ Token de recuperación enviado a ${usuario.email}`);
  } catch (error) {
    console.error('❌ Error enviando token de recuperación:', error.message);
  }
};
