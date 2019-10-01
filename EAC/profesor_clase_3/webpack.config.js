//Este archivo lo lee Node
//ACA NO PUEDO HACER IMPORT : La sintaxis de import solo está disponible en archivos compilados 
let htmlplugin = require("html-webpack-plugin")

module.exports = {
    //mode : forma de compilacion | development - production
    mode : "development",
    //https://webpack.js.org/configuration/devtool/
    devtool : "source-map",
    //module : son cada una de las cosas que le queremos hacer a cada archivo(modulo) que vamos a compilar 
    module : {
        rules : [
            {
                test : /\.js$/,
                use : "babel-loader"
            }
        ]
    },
    //plugins : Un array de nuevas instancias de plugins que funciona de manera automatica 
    plugins : [
        //html-webpack-plugin por default genera un html nuevo, entonces, si ya tenemos una plantilla que queremos usar, se la pasamos como configuración 
        new htmlplugin({
            //template : es la ruta en donde esta la plantilla html a compilar 
            template : "./src/index.html",
            minify : {
                removeAttributeQuotes : true,
                removeComments : true,
                collapseWhitespace : true,
            }
        })
    ],
    //devServer : configuraciones del HMR  (webpack-dev-server)
    devServer : {
        //open : abre automaticamente el navegador 
        open : true
    }
}