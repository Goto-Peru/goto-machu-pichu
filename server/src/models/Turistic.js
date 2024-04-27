const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Turistic', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
        },


        details: {
            type: DataTypes.STRING
        },


        price: {
            type: DataTypes.FLOAT,
        },
        imageFile: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },

        package: {
            type: DataTypes.STRING,
        },
        



    },);
};
