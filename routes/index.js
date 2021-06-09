var router = require('express').Router();

router.get('/', (req, res, next)=>{
  res.send('API de Membership Portal');
});

router.use('/funnel-membership', require('./funnel-membership'));
router.use('/pagina-membership', require('./pagina-membership'));

module.exports = router;