const mysql = require('mysql')
const config = require('../config');
const { error } = require('../red/respuestas');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conection;

function conectionSql(){
    conection = mysql.createConnection(dbconfig);

    conection.connect((err)=>{
        if(err) {
            console.log('[db err]',err);
            setTimeout(conectionSql,200);
        }else{
            console.log('conexion exitosa!!!')
        }
    })

    conection.on('error', err => {
        console.log('[db err]',err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conectionSql();
        }else{
            throw err;
        }
    })
}

conectionSql();

function todos(tabla){
    return new Promise((resolve,reject)=>{
        conection.query(`SELECT * FROM ${tabla} WHERE imagen != ""`, (error, result) => {
            if (error) return reject(error);
            resolve(result)
        })
    })
}

function uno(tabla,id){
    return new Promise((resolve,reject)=>{
        conection.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, result) => {
            if (error) return reject(error);
            resolve(result)
        })
    })
}

function porProveedor(tabla,pProv){
    return new Promise((resolve,reject)=>{
        conection.query(`SELECT * FROM ${tabla} WHERE Proveedor = "${pProv}" && imagen != ""`, (error, result) => {
            if (error) return reject(error);
            resolve(result)
        })
    })
}

// function addimg(tabla,img){
//     return new Promise((resolve,reject)=>{
//         conection.query(`UPDATE ${tabla} SET imagen ='${img}' WHERE id = 3`, (error, result) => {
//             if (error) return reject(error);
//             resolve(result)
//         })
//     })
// }

function agregar(tabla, data){
    // return new Promise((resolve,reject) =>{
    //     conection.query(``)
    // })
}

function eliminar(tabla, data){
    return new Promise((resolve,reject)=>{
        conection.query(`DELETE FROM ${tabla} WHERE id = ?`,data.id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

module.exports = {
    todos,
    uno,
    porProveedor,
    agregar,
    eliminar
}