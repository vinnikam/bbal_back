const Usuario = require("./usuario");
const express = require('express')
const sequelize = require('../config/bd')

const usuarioCtrl = {}

usuarioCtrl.crear = async(req, res) => {
    await Usuario.create(req.body).then(()=>{
        res.json({
            'status':'Almacenó el usuario'
        });

    })
}
usuarioCtrl.consultar = async(req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}
usuarioCtrl.consulta = async(req, res) => {
    const  laidentificacion  = req.params.identificacion;
    const usuario = await Usuario.findOne({where: {identificacion: laidentificacion}});
    res.json(usuario);
}
usuarioCtrl.autenticar = async(req, res) => {
    const  laidentificacion  = req.params.identificacion;
    console.log(req.body.identificacion)

    const usuario = await Usuario.findOne({
        where: {
            identificacion: req.body.identificacion,
            rol: req.body.rol,
            clave: req.body.clave}});
    res.json(usuario);
}
module.exports = usuarioCtrl;
