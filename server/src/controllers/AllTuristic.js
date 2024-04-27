require('dotenv').config();
const { Turistic, Reservation } = require('../db');

module.exports = {
  AllTuristic: async (req, res) => {
    try {
      const turistic = await Turistic.findAll();
    if (!turistic) {
      console.log("No hay niguna publicacion")
      res.status(404).send({success: false, message: "No hay niguna publicacion"});
    } else {
    console.log("Todos las publicaciones ")
      res.status(200).send({success: true, data: turistic});
    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
