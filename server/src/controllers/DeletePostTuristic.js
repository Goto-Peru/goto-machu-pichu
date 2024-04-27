require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Turistic } = require('../db');

module.exports = {
  DeletePostTuristic: async (req, res) => {
    const { turisticId } = req.params;

    try {

  const deleteTuristic = await Turistic.findByPk(turisticId)
  if (!deleteTuristic) {
    console.log('La publicación no existe');
    return res.status(404).send({success: false , message: 'La publicación no existe' })
  }
      await deleteTuristic.destroy();

      return res.status(200).send({success: false, data: 'Publicación eliminada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
