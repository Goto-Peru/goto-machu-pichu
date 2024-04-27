const { Turistic, Reservation } = require('../db');
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_KEY);
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'elaritechinfo@gmail.com',
    pass: process.env.PASS,
  },
  socketTimeout: 15000, // tiempo de espeamoríoasuntora en milisegundos
  tls: {
    rejectUnauthorized: false,
  },
});
module.exports = {
    Payment: async (req, res) => {
        const { turisticId } = req.params;
        const { 
            name,
            phone,
            email, 
            date
        } = req.body;





        try {
          
            const turistic = await Turistic.findByPk(turisticId);
            if (!turistic) {
                return res.status(404).json({ success: false, message: 'Publicación no encontrada' });
            }
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price_data: {
                            product_data: {
                                name: turistic.name,
                                description: turistic.details,
                                images: [turistic.imageFile[0]], // Aquí agregamos la URL de la imagen
                            },
                            currency: 'usd',
                            unit_amount: turistic.price * 100,
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `http://localhost:3000/detalles/${turistic.id}`,
                cancel_url: `http://localhost:3000/detalles/${turistic.id}`,
                payment_method_types: ['card'],
                metadata: {
                    email: email, // Agregamos el email como metadata
                },
            });
            setTimeout(async () => {
                try {
                    const emailContent = `
                    <html>
                    <body style="text-align: center;  background: rgb(253, 251, 251); padding: 2em">
                      <div style="display: inline-block; text-align: left; padding: 1em; background: white;  width: 90%" >
                        <div style="margin: 0 auto; text-align: center;">
                          <img src="https://res.cloudinary.com/dz0lruj7k/image/upload/v1713555106/u77uwejrd1v9xsrdapoo.jpg" alt="Logo de la empresa" style="display: block; max-width: 150px; margin: 0 auto;">
                        </div>
                  
                        <p style="color: black;">Estimado/a ${name} ,</p>
                    <p style="color: black;">Estamos encantados de confirmar de que su reservaciòn se realizo exitosamente!</p>
                        <p style="color: black;">Lugar turistico: ${turistic.name} </p>
                        <p style="color: black;">Precio abonado: US$${turistic.price} </p>
                        <p style="color: black;">Fecha de reserva: ${date} </p>
                      </div>
                    </body>
                  </html>
                    `;
        
                    const sendEmail = await transporter.sendMail({
                        from: 'elaritechinfo@gmail.com',
                        to: email,
                        subject:  "¡Reserva exitosa!",
                        html: emailContent,
                    });
                    console.log('Correo electrónico enviado:', sendEmail.response);
                } catch (emailError) {
                    console.error('Error al enviar el correo electrónico:', emailError);
                }
            }, 30000); // 70 segundos en milisegundos
   const reservation = await Reservation.create({
  name,
  phone,
  email,
  date,
  TuristicId: turisticId // Establecer la relación con la publicación turística
});

            console.log('Pago exitoso');
            return res.status(200).send({success: true, data: session.url});


        } catch (error) {
            console.error('Error al crear la sesión:', error);
            return res.status(500).json({ message: 'Error del servidor' });
        } finally {
          
        }
    },
};
