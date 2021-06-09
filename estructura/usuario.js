const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/bd')

class Usuario extends Model{}

Usuario.init({
    tipoidentificacion: {
        type: DataTypes.ENUM({
            values: ['T.I.', 'C.C.']
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
    clave: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.ENUM({
            values: ['Administrador', 'Empleado', 'Entrenador', 'Representante', 'Jugador']
        })
    },

},{
    sequelize,
    modelName: "usuario",
    timestamps: false
})
module.exports = Usuario;
