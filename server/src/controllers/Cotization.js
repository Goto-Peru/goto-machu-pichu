require('dotenv').config();
const nodemailer = require('nodemailer');
const { Cotization } = require('../db');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'elaritechinfo@gmail.com',
    pass: process.env.PASS,
  },
  socketTimeout: 15000, // tiempo de espera en milisegundos
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  Cotization: async (req, res) => {
    const { name, lastName, phone, email, services, date, peoples, more } = req.body;

    // Validar que se haya proporcionado un correo electrónico
    if (!email || !email.trim()) {
      return res.status(400).json({ message: 'Dirección de correo electrónico no válida' });
    }

    // Validar que el correo electrónico tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Dirección de correo electrónico no válida' });
    }

    try {
      const emailContent = `
      <html>
      <body>
          <p style="color: black;">Nombre: ${name},</p>
          <p style="color: black;">Apellido: ${lastName},</p>
          <p style="color: black;">Teléfono: ${phone},</p>
          <p style="color: black;">Email: ${email},</p>
          <p style="color: black;">¿Qué servicios deseas?: ${services},</p>
          <p style="color: black;">¿Cuántas personas son?: ${peoples},</p>
          <p style="color: black;">Posible fecha de viaje: ${date},</p>
          <p style="color: black;">¿Algo más que debamos tener en cuenta?: ${more},</p>
      </body>
      </html>
      `;

      await transporter.sendMail({
        from: 'elaritechinfo@gmail.com',
        to: 'elaritechinfo@gmail.com',
        subject: '¡Nueva cotización recibida!',
        html: emailContent,
      });

      const cotization = await Cotization.create({
        name, lastName, phone, email, services, date, peoples, more
      });

      console.log('Correo enviado correctamente');
      return res.status(200).send({ success: true, data: cotization });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
