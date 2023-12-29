require ('dotenv').config(); //Para que tome todo el archivo .env
const Server = require('./models/server');

const server = new Server();

server.listen();


