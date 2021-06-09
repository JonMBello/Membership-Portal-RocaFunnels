const router = require ('express').Router();
const {
    obtenerFunnel,
    obtenerFunnels,
    creaFunnel,
    modificarFunnel,
    eliminarFunnel
} = require('../controllers/funnel-membership');

router.get('/', obtenerFunnels);
router.get('/:id', obtenerFunnel);
router.post('/', creaFunnel);
router.put('/:id', modificarFunnel);
router.delete('/:id', eliminarFunnel);

module.exports = router;