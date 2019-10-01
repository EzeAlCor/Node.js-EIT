//import http from "http"
const http = require("http")
//FileSystem
const fs = require("fs")

const server = http.createServer((req,res)=>{
    //LOGGER
    let {httpVersion,method,url} = req
    console.log(`${httpVersion} ${method} ${url}`)

    let readable = fs.createReadStream(`${__dirname}/index.html`)
    readable.pipe(res)

    /*
    fs.readFile(`${__dirname}/index.html`,(err,data)=>{
        console.log("Error:",err)
        console.log("Data:",data)
        //Si puedo escribir multiples veces sobre el stream de la respuesta(res)
        res.writeHead(500,{"content-type":"text/html"})
        res.write(data)
        //No puedo escribir la data directamente en el end ya que la misma se esta almacenando en un buffer mientras es stremeada, entonces tengo múltiples "datas"
        //res.end(data)
        res.end()
    })
    */
})

/* 
Es lo mismo que arriba pero manejado en forma de evento
server.on("request",(req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<p>Hola Mundo</p>")
    res.end()
})
*/
server.listen(8080,()=>{
    console.log("Escuchando en el 8080")
})