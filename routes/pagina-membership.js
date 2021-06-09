const router = require ('express').Router();
const {
    obtenerPagina,
    obtenerPaginas,
    creaPagina,
    modificarPagina,
    eliminarPagina
} = require('../controllers/pagina-membership');

router.get('/', obtenerPaginas);
router.get('/:id', obtenerPagina);
router.post('/', creaPagina);
router.put('/:id', modificarPagina);
router.delete('/:id', eliminarPagina);

module.exports = router;