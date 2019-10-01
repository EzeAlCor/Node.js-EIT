//este archivo lo lee node
// aca no se puede hacer import: la sintaxis de import 
//solo esta disponibles en archivos compilados
let htmlplugin = require("html-webpack-plugin")
module.exports = {
    //opciones de compilacion -> development o production
    mode : "development",
    devtool : "source-map",
    //configuracion para todos los modulos,
    //son cada una de las cosas que le queremos hacer a cada 
    //archivo, es decir a cada modulo que vamos a compilar
    module : {
        rules : [
            {
                test : /\.js$/ ,
                use : "babel-loader" //cominica webpack con babel
            }
        ]
    },
    // plugins : un array de nuevas instancias de plugins 
    //que funcionan de forma automatica
    plugins : [
        //html-webpack-plugin por default genera un html nuevo, entonces si ya tenemos una plantilla
        // que queremos usar, se la pasamos como configuracion
        new htmlplugin({
            //template: es la ruta en donde esta la plantilla html a compilar
            template: "./src/index.html",
            minify : {
                removeAttributeQuotes : true,
                removeComments : true,
                collapseWhitespace : true,
            }
        })
    ],
    //devServer : configuracion del HMR (webpack-dev-server)
    devServer : {
        // open : abre automaticamente el navegador
        open : true
    }

}