const express = require('express')

const respuesta = require('../../red/respuestas')
const controller =  require('./controller');

const router = express.Router();


router.get('/', todos);
async function todos (req, res){
    try{
        const items = await controller.todos();
        respuesta.success(req,res, items,200);
    
    }catch(err){
        next(err);
    }

    
}

router.get('/:id', uno);
async function uno (req, res){
    try{
        const items = await controller.uno(req.params.id);
        respuesta.success(req,res, items,200);
    
    }catch(err){
        next(err);
    }
    
}

router.get('/proveedor/:proveedor', porProveedor);
async function porProveedor (req, res){
    try{
        const items = await controller.porProveedor(req.params.proveedor);
        respuesta.success(req,res, items,200);
    
    }catch(err){
        next(err);
    }
    
}

router.put('/', eliminar)
async function eliminar(req,res) {
    try{
        const items = await controller.eliminar(req.body);
        respuesta.success(req,res, 'items eliminado!!!',200);
    
    }catch(err){
        next(err);
    }
}



module.exports = router