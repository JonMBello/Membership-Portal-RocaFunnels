let obtenerPagina = (req, res, next) => {
    let id = req.params.id;
    //TODO
    //Buscar Pagina
    //Regresar Pagina o error
    res.status(200).send(`Get, Obtener Pagina ${id}`);
}

let obtenerPaginas = (req, res, next) => {
    //TODO
    //Buscar Paginas del Funnel
    //Regresar Paginas
    res.status(200).send("Get, Obtener Paginas");
}

let creaPagina = (req, res, next) => {
    let body = req.body;
    //TODO
    //Verificar que los datos necesarios estén en la petición
    //Verificar que los datos tengan el formato necesario
    //Verificar que el Funnel exista y corresponde al usuario
    //Crear Pagina
    //Regresar pagina o error
    res.status(201).json({
        msg : "Post, Crear Pagina",
        pagina : body
    });
}

let modificarPagina = (req, res, next) => {
    let body = req.body;
    //TODO
    //Verificar que los datos tengan el formato necesario
    //Verificar que existe la pagina, el funnel y corresponde al usuario
    //Verificar que los datos no correspondan a otra pagina
    //Actualizar cambios
    //Regresar Pagina o error
    res.status(200).json({
        msg : "Put, Modificar Pagina",
        pagina : body
    });
}

//Eliminación física
let eliminarPagina = (req, res, next) => {
    //TODO
    //Eliminar pagina
    //Regresar mensaje de exito o error
    let id = req.params.id;
    res.status(200).send(`Delete, Eliminar Pagina ${id}`);
}

module.exports = {
    obtenerPagina,
    obtenerPaginas,
    creaPagina,
    modificarPagina,
    eliminarPagina
}