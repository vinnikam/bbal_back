const Pago = require("./pago");
const express = require('express')
const sequelize = require('../config/bd')

const pagoCtrl = {}

pagoCtrl.crear = async(req, res) => {
    await Pago.create(req.body).then(()=>{
        res.json({
            'status':'Almacenó el pago'
        });

    })
}
pagoCtrl.consultar = async(req, res) => {
    const pagos = await Pago.findAll();
    res.json(pagos);
}
pagoCtrl.consulta = async(req, res) => {
    const  laidentificacion  = req.params.identificacion;
    //console.log(laidentificacion)
    const pago = await Pago.findOne({where: {identificacion: laidentificacion}});
    res.json(pago);
}

module.exports = pagoCtrl;
