const express= require('express');
const router= express.Router();
const Pais = require('../models/Pais');

router.get('/hello',(req,res) => res.send('Hello'));

//Listar todos los empleados
router.get('/paises',(req,res) =>{
    Pais.find({},(err,paises) =>{
    return res.json(paises);
});
});

//Dar de alta un empleado
router.post('/paises',(req,res) =>{
    Pais.create(req.body,(err,pais)=>{
        if(err){
            res.json(err);
        }else{
            return res.json(pais);
        }
    });
});


module.exports= router;
