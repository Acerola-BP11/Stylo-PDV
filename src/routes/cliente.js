var express = require('express');
var router = express.Router();
const clienteController = require('../controllers/clienteController')

/* GET users listing. */
router.get('/', clienteController.list);
router.get('/:id', clienteController.view);
router.get('/form', clienteController.form);
router.post('/delete', clienteController.delete);
router.post('/form', clienteController.create);
router.post('/update', clienteController.update);

module.exports = router;
