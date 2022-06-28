const express = require('express')
const app = express()

//importar conexion Mongo DB

const archivoDB = require('./conexion')

//importacion del arhcivo de rutas y model usuario
const rutasuario = require('./rutas/usuario')

//importar extion body parser

const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutasuario)

app.get('/' ,(req , res) =>{
    res.end('Hola mundo desde node.js')
})
//configuracion server basico

app.listen(5000,()=>{
console.log('EL SERVIDOR ESTA CORRIENDO CON NPM NODEMON')
})