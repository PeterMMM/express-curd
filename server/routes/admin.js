var express = require('express');
var router = express.Router();

const juiceController = require('../controllers/juiceController');

router.get('/juice/list', juiceController.getAdminJuiceList);
router.get('/juice/:id', juiceController.getAdminJuiceDetail);
router.put('/juice/update/:id', juiceController.adminUpdate);
router.post('/juice/create', juiceController.adminCreate);
router.delete('/juice/delete/:id', juiceController.adminDeleteJuice);

module.exports = router;
