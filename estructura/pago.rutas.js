const pago = require("./pago.controller");


module.exports = (router)=>{
    router.post('/pago/crear', pago.crear);
    router.get('/pago/', pago.consultar);
    router.get('/pago/:identificacion', pago.consulta);
}
