// TODO: Integrar con SendGrid o Nodemailer
const nodemailer = require('nodemailer');

/**
 * Enviar email de bienvenida
 */
exports.enviarBienvenida = async (usuario) => {
  try {
    // TODO: Configurar transporter con SendGrid o SMTP
    console.log(`📧 Email de bienvenida a ${usuario.email}`);
    // await transporter.sendMail({...});
  } catch (error) {
    console.error('Error enviando email:', error);
  }
};

/**
 * Enviar confirmación de reserva
 */
exports.enviarConfirmacionReserva = async (usuario, reserva, instalacion) => {
  try {
    console.log(`📧 Confirmación de reserva enviada a ${usuario.email}`);
    // const html = `
    //   <h2>Reserva Confirmada</h2>
    //   <p>Tu reserva en ${instalacion.nombre} ha sido confirmada.</p>
    //   <p>Fecha: ${reserva.fecha}</p>
    //   <p>Hora: ${reserva.hora_inicio} - ${reserva.hora_fin}</p>
    // `;
    // await transporter.sendMail({...});
  } catch (error) {
    console.error('Error enviando confirmación:', error);
  }
};

/**
 * Enviar recordatorio de reserva
 */
exports.enviarRecordatorio = async (usuario, reserva, instalacion) => {
  try {
    console.log(`📧 Recordatorio de reserva enviado a ${usuario.email}`);
  } catch (error) {
    console.error('Error enviando recordatorio:', error);
  }
};

/**
 * Enviar confirmación de pago
 */
exports.enviarConfirmacionPago = async (usuario, pago) => {
  try {
    console.log(`📧 Confirmación de pago enviada a ${usuario.email}`);
  } catch (error) {
    console.error('Error enviando confirmación de pago:', error);
  }
};

/**
 * Enviar cancelación de reserva
 */
exports.enviarCancelacionReserva = async (usuario, reserva) => {
  try {
    console.log(`📧 Cancelación de reserva enviada a ${usuario.email}`);
  } catch (error) {
    console.error('Error enviando cancelación:', error);
  }
};

/**
 * Enviar token de recuperación
 */
exports.enviarTokenRecuperacion = async (usuario, token) => {
  try {
    const enlace = `${process.env.FRONTEND_URL}/recuperar-contrasena?token=${token}`;
    console.log(`📧 Token de recuperación enviado a ${usuario.email}`);
    console.log(`   Enlace: ${enlace}`);
  } catch (error) {
    console.error('Error enviando token:', error);
  }
};
