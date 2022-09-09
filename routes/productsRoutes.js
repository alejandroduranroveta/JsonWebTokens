const express = require('express');
const isAdmin = require('../Middleware/isAdmin');
const { listProducts, newProduct, editProduct, deleteProduct } = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', listProducts);
router.post('/new',isAdmin, newProduct);
router.put('/edit/:id', isAdmin,editProduct);
router.delete('/delete/:id',isAdmin, deleteProduct);

module.exports = router;