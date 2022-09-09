const express = require('express');
const { listProducts, newProduct, editProduct, deleteProduct } = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', listProducts);
router.post('/new', newProduct);
router.put('/edit/:id', editProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;