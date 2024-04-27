require('dotenv').config();
const { Turistic } = require('../db');

module.exports = {
    DetailsTuristic: async (req, res) => {
        const {turisticId}= req.params
    try {
      const turistic = await Turistic.findByPk(turisticId);
    if (!turistic) {
      console.log("No existe el lugar turistico")
      res.status(404).send({success: false, message: "No existe el lugar turistico"});
    } else {
    console.log("Detalle del lugar turistico")
      res.status(200).send({success: true, data: turistic});
    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
