const db = require('../../DB/ConectionBD')
const tabla = 'datamotherboard'

function todos(){
    return db.todos(tabla);
}

function uno(id){
    return db.uno(tabla,id)
}

function proveedor(Prov){
    return db.porProveedor(tabla,Prov)
}

module.exports = {
    todos,
    uno,
    proveedor
}