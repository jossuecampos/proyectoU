const express = require('express');
const morgan = require('morgan')
const config = require('./config');
const cors = require('cors');

const monitores = require('./modulos/monitores/rutas');
const rams = require('./modulos/rams/rutasRam');
const cpu = require('./modulos/cpu/cpuRutas')
const cpuCooler = require('./modulos/cpuCooler/cpuCoolerrutas')
const gpu = require('./modulos/gpu/gpuRutas')
const hdd = require('./modulos/hdd/hddRutas')
const motherboard = require('./modulos/motherboard/motherboardRutas')
const psu = require('./modulos/psu/pcuRutas')
const ssd = require('./modulos/ssd/ssdRutas')
const storre = require('./modulos/storre/storreRutas')

const error = require('./red/errors');

const app = express();

app.use(cors());

//MiddleWare
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configuracion
app.set('port', config.app.port)

//Rutas
app.use('/api/monitores', monitores)
app.use('/api/rams', rams)
app.use('/api/cpu',cpu)
app.use('/api/cpuCooler',cpuCooler)
app.use('/api/gpu',gpu)
app.use('/api/hdd',hdd)
app.use('/api/motherboard', motherboard)
app.use('/api/psu',psu)
app.use('/api/ssd',ssd)
app.use('/api/storre', storre)

app.use(error)

module.exports = app;