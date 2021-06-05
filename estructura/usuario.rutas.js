const usuario = require("./usuario.controller");


module.exports = (router)=>{
    router.post('/usuario/crear', usuario.crear);
    router.get('/usuario/', usuario.consultar);
    router.get('/usuario/:identificacion', usuario.consulta);
}
