const usuario = require("./usuario.controller");


module.exports = (router)=>{
    router.post('/usuario/crear', usuario.crear);
    router.get('/usuario/', usuario.consultar);
    router.post('/usuario/autenticar', usuario.autenticar);
    router.get('/usuario/:identificacion', usuario.consulta);
    router.post('/usuario/validar', usuario.validar);
}
