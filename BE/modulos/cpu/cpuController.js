const db = require('../../DB/ConectionBD');//extanciar el archivo de la conexion

const tabla = 'datacpu_1'

function todos () {
    return db.todos(tabla)//pasar los datos a los metodos creados en la conexion 
}

function uno (id) {
    return db.uno(tabla,id)//pasar los datos a los metodos creados en la conexion 
}

function proveedor (pProv){
    return db.porProveedor(tabla,pProv)
}

function eliminar (body) {
    return db.eliminar(tabla,body)//pasar los datos a los metodos creados en la conexion 
}

module.exports = { //Exportar los metodos.
    todos,
    uno,
    proveedor,
    eliminar
}