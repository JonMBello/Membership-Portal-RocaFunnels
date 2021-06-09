let obtenerFunnel = (req, res, next) => {
    let id = req.params.id;
    //TODO
    //Buscar Funnel
    //Regresar Funnel o error
    res.status(200).send(`Get, Obtener Funnel ${id}`);
}

let obtenerFunnels = (req, res, next) => {
    //TODO
    //Buscar Funnels
    //Regresar Funnels
    res.status(200).send("Get, Obtener Funnels");
}

let creaFunnel = (req, res, next) => {
    let body = req.body;
    //TODO
    //Verificar que los datos necesarios estén en la petición
    //Verificar que los datos tengan el formato necesario
    //Crear Funnel
    //Regresar Funnel o error
    res.status(200).json({
        msg : "Post, Crear Funnel",
        funnel : body
    });
}

let modificarFunnel = (req, res, next) => {
    //TODO
    //Verificar que los datos tengan el formato necesario
    //Verificar que existe el Funnel
    //Verificar que los datos no correspondan a otro Funnel
    //Actualizar cambios
    //Regresar Funnel o error
    let body = req.body;
    res.status(200).json({
        msg : "Put, Modificar Funnel",
        funnel : body
    });
}

//Eliminación lógica
let eliminarFunnel = (req, res, next) => {
    //TODO
    //Eliminar Funnel
    //Regresar mensaje de exito o error
    let id = req.params.id;
    res.status(200).send(`Delete, Eliminar Funnel ${id}`);
}

module.exports = {
    obtenerFunnel,
    obtenerFunnels,
    creaFunnel,
    modificarFunnel,
    eliminarFunnel
}