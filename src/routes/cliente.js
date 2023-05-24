var express = require('express');
const clienteController = require('../controllers/clienteController')
var router = express.Router();

/* GET users listing. */
router.get('/', clienteController.list);
router.get('/view/:id', clienteController.view);
router.get('/novo', clienteController.form);
router.post('/delete', clienteController.delete);
router.post('/novo', clienteController.create);
router.post('/update', clienteController.update);

module.exports = router;
