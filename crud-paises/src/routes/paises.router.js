const{Router}= require('express');

const router= Router();

const paisesCtrl= 
    require('../controllers/paises.controller');

//Consultar todos los paises
router.get('/paises',paisesCtrl.getPaises);

//Consultar paises
router.get('/paises/:id',paisesCtrl.getPais);

//Crear pais
router.post('/paises',paisesCtrl.createPais);

//Actualizar pais
router.put('/paises/:id',paisesCtrl.editPais);

//Eliminar pais
router.delete('/paises/:id',paisesCtrl.deletePais);

module.exports= router;