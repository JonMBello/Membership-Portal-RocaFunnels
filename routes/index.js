var router = require('express').Router();

router.get('/', (req, res, next)=>{
  res.send('API de Membership Portal');
});

module.exports = router;