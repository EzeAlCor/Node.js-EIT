// react : se separa en dos librerias, la libreria "react" y "reac-dom"
import React from "react"
import ReactDom from "react-dom"
//todos los componentes de REact son funciones y todas tienen que retornar algo,
// como html, JSX, otro componente o string(puede ser json)
// todos los componenetes de react van en mayusculas porque asi las diferencia
// los componenetes ejecutados se escriben en jsx. por ejemplo foo() === <foo/>
// el compilador de las etiquetas html

// ejemplo
//function Comp(){ return "hola mundo"}
let Comp = () => "Hola mundo"
//let Comp = function(){ return "hola mundo"}
// la funcion render toma dos cosas
ReactDOM.render(<Comp/>,document.querySelector("body"))



// class comp {}