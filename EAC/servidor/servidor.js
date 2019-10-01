//const http = require("http")
const express = require("express")
const PORT = 8080

//const server = http.createServer((req,res)=>{})
const server = express()

//Servidor.METHOD(path String,callback Function)
server.get("/",(req,res)=>{
    res.send("{x:1}")
    //res.render() => Puede trabajar con motores de vista 
    //res.send() => Puede enviar cualquier cosa
    //res.sendFile() => Envia archivos 
    //res.json() => Envia chunks en formato json
    //res.jsonp() => Lo mismo que .json pero con formato para padding
})

//server.listen(PORT)
server.listen(PORT,()=>{
    console.log(`Express corriendo en el ${PORT}`)
})
