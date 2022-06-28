const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected' , ()=>{console.log('CONEXION CORRECTA A MONGODB')})
objetobd.on('error' , ()=>{console.log('ERROR EN LA CONEXION A MONGODB')})

module.exports = mongoose