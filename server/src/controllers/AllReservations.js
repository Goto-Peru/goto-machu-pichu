require('dotenv').config();
const { Reservation, Turistic } = require('../db');

module.exports = {
  AllReservations: async (req, res) => {
    try {
      const reservations = await Reservation.findAll({
        include: [{
          model: Turistic
        }]
      });
    if (!reservations) {
      console.log("No hay niguna Reservaciones")
      res.status(404).send({success: false, message: "No hay niguna Reservaciones"});
    } else {
    console.log("Todas las reservaciones")
      res.status(200).send({success: true, data: reservations});
    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
