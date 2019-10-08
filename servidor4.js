const express = require("express")

const servidor = express()

//Middleware
//En versiones viejas de express, el middleware para agarrar body se llama body-parser 
servidor.use(express.json())

//Landing
servidor.get("/",(req,res)=>{
    res.send("Bienvenido al Pokedex!")
})

//Array de todos los pokemones / filtrar por tipo 

//http://localhost:8000/pokemones?tipo=hierba
servidor.get("/pokemones",(req,res)=>{
    if(req.query.tipo){
        res.json([{tipo:"hierba"}])
    }else{
        res.json([{x:1},{x:2}])
    }
})

//Un solo pokemon
servidor.get("/pokemones/:id",(req,res)=>{
    //Request.params => Object - viene con tantas propiedades como named url params hayan configurado. Ej : 
    // req.params === { id : ? }
    //Request.param => Function - Deprecado
    res.json({id:req.params.id})
})

// { tipo : String , id : Number , nombre : String }
servidor.post("/pokemones",(req,res)=>{
    console.log(req.body)
    res.status(201).send("Pokemon creado")
})

/*
fetch("/pokemones",{
	method : "POST",
	headers : { "content-type" : "application/json" },
	body : JSON.stringify({id:1,nombre:"Bulbasaur",tipo:"hierba"})
})
*/

servidor.listen(8000,()=>console.log("Servidor web!"))
