const Estudiante = require("./estudiante");
const express = require('express')
const sequelize = require('../config/bd')

const estudianteCtrl = {}

estudianteCtrl.crear = async(req, res) => {
    await Estudiante.create(req.body).then(()=>{
        res.json({
            'status':'Almacenó el estudiante'
        });

    })
}
estudianteCtrl.consultar = async(req, res) => {
    const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
}
estudianteCtrl.consulta = async(req, res) => {
    const  laidentificacion  = req.params.identificacion;
    console.log(laidentificacion)
    const estudiante = await Estudiante.findOne({where: {identificacion: laidentificacion}});
    res.json(estudiante);
}
estudianteCtrl.version = async(req, res) => {
    res.json({
        'version':'1.0'
    });
}
module.exports = estudianteCtrl;
