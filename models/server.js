const express = require('express')
var cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;//Hacemos visible el puerto globalmente en una variable

        //Rutas api
        this.usuariosPost = '/api/usuarios';

        //Middlewares
        this.middlewares(); //(Funsion que se ejecuta luego de levantar el servidor)

        this.routes(); //llamamos las rutas de la aplicacion
        
    }

    middlewares() { //Accedemos a la carpeta public
        this.app.use(cors()) //Proteje el servidor

        //Lectura y parseo del body
        this.app.use(express.json()); //Lo convierte en json

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
       this.app.use(this.usuariosPost, require('../routes/usuarios'));
    }

    listen() { //Este metodo escucha el puerto
        this.app.listen(this.port, () => {
            //Solo imprimem el puerto donde se esta corriendo el servidor para comprovar.
            console.log('Servidor corriendo en el puerto: ', this.port);
        }); //Sustitulle el puerto que trae el archivo .env
    }
}

module.exports = Server;