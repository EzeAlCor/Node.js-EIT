//React : react react-dom 
//const React = require("react")
//const ReactDom = require("react-dom")
import React from "react"
import ReactDOM from "react-dom"

//function Comp(){ return "Hola Mundo" }
let Comp = () => "Hola Mundo"
//let Comp = function(){ return "Hola Mundo" }
//class comp {}

ReactDOM.render(
    <Comp/>,
    document.querySelector("body")
)


/**
 * - todos los componentes de React son funciones
 * - todos los componentes tienen retorno
 * - solo se puede retornar : String - Componente - JSX
 * - todos los componentes van en mayuscula
 * - los componentes ejecutados se escriben en JSX. Ej.:
 * 
 *      foo()  ===  <foo/>
 * 
 * https://github.com/facebook/jsx
 */