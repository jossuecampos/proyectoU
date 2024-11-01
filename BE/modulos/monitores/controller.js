const db = require('../../DB/ConectionBD');
const tabla = 'datamonitor'

function todos () {
    return db.todos(tabla)
}

function uno (id) {
    return db.uno(tabla,id)
}

function porProveedor (pProv) {
    return db.porProveedor(tabla,pProv)
}

function eliminar (body) {
    return db.eliminar(tabla,body)
}

module.exports = {
    todos,
    uno,
    porProveedor,
    eliminar
}