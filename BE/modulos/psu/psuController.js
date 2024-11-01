const db = require('../../DB/ConectionBD')
const tabla = 'datapsu'

// Endpoint para traer todos los datos de la tabla
function todos(){
    return db.todos(tabla)
}

//Endpoint para traer datos por el id
function uno(id){
    return db.uno(tabla,id)
}

//Endpoint para traer datos por el proveedor
function proveedor(Prov){
    return db.porProveedor(tabla,Prov)
}

//exportar modulos para poderlos usar en otro documento
module.exports = {
    todos,
    uno,
    proveedor
}