var express = require('express');
var router = express.Router();
const pedidoController = require('../controllers/pedidoController')

/* GET home page. */
router.get('/', pedidoController.list);
router.get('/novo', pedidoController.form);
router.get('/pedido/:id', pedidoController.view);
router.post('/novo', pedidoController.create);

module.exports = router;
