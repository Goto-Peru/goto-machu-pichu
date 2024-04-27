require('dotenv').config();
const { Reservation } = require('../db');

module.exports = {
  DetailsReservation: async (req, res) => {
        const {reservationId}= req.params
    try {
      const reservation = await Reservation.findByPk(reservationId);
    if (!reservation) {
      console.log("No existe la reservacion")
      res.status(404).send({success: false, message: "No existe la reservacion"});
    } else {
    console.log("Detalle de la reservacion")
      res.status(200).send({success: true, data: reservation});
    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
