const express = require('express')

const router = express.Router()

const moongose = require('mongoose')
const eschema = moongose.Schema

const eschemausuario = new eschema({
    nombre : String ,
    email : String ,
    telefono : String,
    idusuario : String
})

const modeloUsuario = moongose.model('usuarios',eschemausuario)

module.exports = router

//ruta ejemplo
// router.get('/ejemplo',(req , res) => {
//     res.end('saludos carga desde ruta ejemplo....')
// })


//agregar usuario
router.post('/agregarusuario',(req ,res) =>{
    const nuevousuario = new modeloUsuario({
        nombre :req.body.nombre,
        email: req.body.email,
        telefono : req.body.telefono,
        idusuario : req.body.idusuario
    })
    nuevousuario.save((err)=>{
        if(!err){
            res.send('usuario agregado con exito')
        }else{
            res.send(err)
        }
    })
})
//obtener todos los usuario
router.get('/obtenerusuarios', (req , res )=>{
    modeloUsuario.find({},(docs,err)=>{
        if(!err){
            res.send('docs')
        }else{
            res.send(err)
        }
    })
})

//obtener un usuario
router.post('/obtenerdatausuario', (req , res )=>{
    modeloUsuario.find({idusuario:req.body.idusuario},(docs,err)=>{
        if(!err){
            res.send('docs')
        }else{
            res.send(err)
        }
    })
})

//actualizar usuarioo

router.post('/actualizausuario',(req ,res) =>{
    modeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
        nombre: req.body.nombre,
        email: req.body.email,
        telefono : req.body.telefono
    },(err) => {
        if(!err){
            res.send('usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//borrar usuario

router.post('/borrarusuario',(req ,res) =>{
    modeloUsuario.findOneAndDelete({idusuario:req.body.idusuario},(err)=>{
        if(!err){
            res.send('usuario borrado correctamente')
        }else{
            res.send(err)
        }
    })
})