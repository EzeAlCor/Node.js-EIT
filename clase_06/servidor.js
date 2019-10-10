const express = require("express")
const mongodb = require("mongodb")

//let cliente = mongodb.MongoClient
//let MongoClient = mongodb.MongoClient
let {MongoClient} = mongodb

//Dejo la variable db inicializada arriba de todo, porque desde "db" es de donde sacamos todos los comandos de query, osea para que este en el scope de todo el resto del servidor 
let db; let pokemon_collection;

const servidor = express()

//Middleware para habilitar bodys de tipo JSON
servidor.use(express.json())

//Middleware para habilitar un directorio publico para el front end
servidor.use(express.static("public"))

servidor.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
    //res.send("Pokedex")
})

//localhost:8000/pokemones
//localhost:8000/pokemones?tipo=hierba
servidor.get("/pokemones",(req,res)=>{
    if(req.query.tipo){
        //Solo pokemones de hierba
    }else{
        pokemon_collection = db.collection("samples_pokemon")
        let pokemones = pokemon_collection.find({})
        pokemones.toArray((err,data)=>{
            res.json(data)
        })
        //res.send("funciona!")
    }
})

//Un solo pokemon
//localhost:8000/pokemones/1
servidor.get("/pokemones/:id",(req,res)=>{
   //req.params.id
})

servidor.post("/pokemones",(req,res)=>{
    //req.body.?
})

MongoClient.connect("mongodb://localhost:27017",{
    useNewUrlParser : true,
    useUnifiedTopology : true
},(err,cliente)=>{
    //cliente : es la referencia al cliente conectado al daemon
    if(err) throw new Error(err);

    console.log("Base de datos!")
    
    //No uso let porque ya tengo la variable inicializada al principio del archivo
    /*let*/ db = cliente.db("SampleCollections")

    servidor.listen(8000,()=>{
        console.log("Servidor Web!")
    })
})




/**
 * let mongodb = {MongoClient : {}}
 * let obj = {x:1,y:2}
 * 
 * let x = obj.x
 * let y = obj.y
 * let {x:x,y:y} = obj
 * let {x,y} = obj
 * 
 * let MongoClient = mongodb.MongoClient
 * let {MongoClient:MongoClient} = mongodb 
 * let {MongoClient} = mongodb
 * 
 */