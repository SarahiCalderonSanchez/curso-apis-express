const { response } = require('express');

const usuariosGet = (req, res = response) => {
    //res.send('Hello World')//Eto regresa un texto te tipo sitio web
    res.json({
        msg: 'Get Api - controlador'
    }); //Esto regresa un tipo json
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Put Api - controlador',
        id: id
    }); //Esto regresa un tipo json
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    const { nombre, edad } = req.body;
    res.json({
        msg: 'Post Api - controlador',
        body,
        nombre,
        edad
    }); //Esto regresa un tipo json
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete Api - controlador'
    }); //Esto regresa un tipo json
}

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
} //Se crea asi el export cuando se van a exportar varias funsiones