//(function(module,exports,...){
let a = 1
//ES6
//export let a = () => {}
//export default a
//CommonJS
module.exports.a = a
module.exports = a
//Cada modulo viene con un shortcut de module.exports en la variable exports, con lo cual yo puedo hacer : 
exports.a = a
//LO QUE NO PUEDO HACER!
//exports = a
//})()