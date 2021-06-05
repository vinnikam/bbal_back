const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("datosbk","user", "clave",{
    dialect: "sqlite",
    host: './dev.sqlite'
})
module.exports = sequelize;
