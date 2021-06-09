let obtenerPagina = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Get, Obtener Pagina ${id}`);
}

let obtenerPaginas = (req, res, next) => {
    res.status(200).send("Get, Obtener Paginas");
}

let creaPagina = (req, res, next) => {
    let body = req.body;
    res.status(200).json({
        msg : "Post, Crear Pagina",
        pagina : body
    });
}

let modificarPagina = (req, res, next) => {
    let body = req.body;
    res.status(200).json({
        msg : "Put, Modificar Pagina",
        pagina : body
    });
}

//Eliminación física
let eliminarPagina = (req, res, next) => {
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