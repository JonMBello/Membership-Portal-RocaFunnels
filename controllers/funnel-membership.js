let obtenerFunnel = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Get, Obtener Funnel ${id}`);
}

let obtenerFunnels = (req, res, next) => {
    res.status(200).send("Get, Obtener Funnels");
}

let creaFunnel = (req, res, next) => {
    let body = req.body;
    res.status(200).json({
        msg : "Post, Crear Funnel",
        funnel : body
    });
}

let modificarFunnel = (req, res, next) => {
    let body = req.body;
    res.status(200).json({
        msg : "Put, Modificar Funnel",
        funnel : body
    });
}

let eliminarFunnel = (req, res, next) => {
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