const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/bd')

class Estudiante extends Model{}

Estudiante.init({
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
    fnacimiento: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.STRING

    },
    foto : {
        type: DataTypes.BLOB
    }

},{
    sequelize,
    modelName: "estudiante",
    timestamps: false
})
module.exports = Estudiante;
