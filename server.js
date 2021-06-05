'use strict'
const cors = require('cors');
const express = require("express");
const properties = require('./config/properties');
const sequelize = require('./config/bd')

const estudianteRutas = require('./estructura/estudiante.rutas')
const pagoRutas = require('./estructura/pago.rutas')
const usuarioRutas = require('./estructura/usuario.rutas')


sequelize.sync({force: true}).then(() => console.log('Bd esta activa '));

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);
estudianteRutas(router);
pagoRutas(router);
usuarioRutas(router);

router.get('/', (req,res) => {
    res.send('Api para consultar : autor Vinni@ 2021')
});
app.use(router)
app.listen(properties.PORT, ()=> console.log((`Servidor ejecutanto en ${properties.PORT}`)));

