const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Reservation', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
        },




        phone: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.STRING,
        },

        TuristicId: {
            type: DataTypes.UUID,

        }



    },);
};
