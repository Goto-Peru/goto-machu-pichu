const { Turistic } = require('../db');

module.exports = {
  UpdateTuristic: async (req, res) => {
    const { turisticId } = req.params;
    const { name, details, price, package } = req.body;

    try {
      let turistic = await Turistic.findByPk(turisticId);

      if (!turistic) {
        return res.status(404).send({ message: 'Publicación turística no encontrada' });
      }

      turistic = await turistic.update({ name, details, price, package });

      console.log('Publicación turística actualizada correctamente');
      res.status(200).send({ message: 'Publicación turística actualizada correctamente', data: turistic });

    } catch (error) {
      console.error('Error al actualizar la publicación turística:', error);
      res.status(500).send({ error: 'Error al actualizar la publicación turística' });
    }
  }
};
