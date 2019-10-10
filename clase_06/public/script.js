

fetch("/pokemones")
.then(res=>res.json())
.then(res=>{
    res.forEach(pokemon=>{

        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")
        let img = document.createElement("img")
    
        div.className = "pokemon"
        h2.innerText = `#${pokemon.num} - ${pokemon.name}`
        p.innerText = `Altura : ${pokemon.height} / Peso : ${pokemon.weight}`
        img.src = pokemon.img

        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(img)
        document.body.appendChild(div)

    })
})