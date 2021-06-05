const estudiantes = require("./estudiante.controller");


module.exports = (router)=>{
    router.post('/estud/crear', estudiantes.crear);
    router.get('/estud/version', estudiantes.version);
    router.get('/estud/', estudiantes.consultar);
    router.get('/estud/:identificacion', estudiantes.consulta);
}
