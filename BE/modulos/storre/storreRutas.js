const express = require('express')

const respuesta = require('../../red/respuestas')
const controller = require('./storreController');

const router = express.Router();

router.get('/', todos);
async function todos(req, res) {
    try{
        const items = await controller.todos();
        respuesta.success(req,res, items,200)
    }catch(err){
        next(err);
    }
}

router.get('/:id', uno);
async function uno(req, res) {
    try {
        const items = await controller.uno(req.params.id);
        respuesta.success(req,res, items,200);
    } catch (err) {
        next(err);
        
    }
}

router.get('/storreproveedor/:proveedor', porProveedor);
async function porProveedor(req, res) {
    try {
        const items = await controller.proveedor(req.params.proveedor);
        respuesta.success(req,res,items,200)
    } catch (err) {
        next(err)
    }
}

module.exports = router;