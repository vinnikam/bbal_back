const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/bd')

class Usuario extends Model{}

Usuario.init({
    tipoidentificacion: {
        type: DataTypes.ENUM({
            values: ['Tarjeta Identidad', 'Cédula Ciudadanía']
        })
    },
    identificacion: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING

    },
    rol: {
        type: DataTypes.ENUM({
            values: ['Administrador', 'Empleado']
        })
    },

},{
    sequelize,
    modelName: "usuario",
    timestamps: false
})
module.exports = Usuario;
