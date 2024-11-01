const db = require('../../DB/ConectionBD')
const tabla = 'datagpu'

//endpoint para traer todos los datos de la tabla
function todos(){
    return db.todos(tabla)
}

//endpoint para traer todos los datos de la tabla en base al id
function uno (id) {
    return db.uno(tabla,id)//pasar los datos a los metodos creados en la conexion 
}

//endpoint para traer todos los datos de la tabla en base al proveedor.
function proveedor (pProv){
    return db.porProveedor(tabla,pProv)
}

//endpoint para eliminar un dato
function eliminar (body) {
    return db.eliminar(tabla,body)//pasar los datos a los metodos creados en la conexion 
}

module.exports = {
    todos,
    uno,
    proveedor,
    eliminar
}
