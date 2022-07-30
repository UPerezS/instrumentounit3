// const hello=(req,res)=> res.send('hello');

const paisesCtrl={};

const Pais= require('../models/Pais');

paisesCtrl.getPaises= async (req,res)=>{
    const paises= await Pais.find();
    res.json(paises);
}

paisesCtrl.createPais= async (req,res)=>{
    const pais= new Pais(req.body);
    console.log(pais);
    await pais.save();
    res.send({message:'Pais Agregado'});
}

paisesCtrl.getPais= async(req,res)=>{
    const pais= await Pais.findById(req.params.id);
    res.send(pais);
}

paisesCtrl.editPais= async(req,res)=>{
    const pais= await Pais.findByIdAndUpdate(
                                req.params.id,req.body);
    res.json({message:'Pais Actualizado'});
}

//Eliminar empleado
paisesCtrl.deletePais= async(req,res)=>{
    const pais= await Pais.findByIdAndDelete(
        req.params.id)
    res.json({message:'Pais eliminado'});
}

module.exports= paisesCtrl;
