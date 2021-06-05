const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/bd')
const Estudiante = require("./estudiante");
const Usuario = require("./usuario");


class Pago extends Model{}

Pago.init({
    valor: {
        type: DataTypes.NUMBER
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fpago: {
        type: DataTypes.DATE
    },
    mes: {
        type: DataTypes.ENUM({
            values: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        })
    }

},{
    sequelize,
    modelName: "pago",
    timestamps: false
})
Pago.Estudiante = Pago.belongsTo(Estudiante);
Pago.Usuario = Pago.belongsTo(Usuario);
module.exports = Pago;
