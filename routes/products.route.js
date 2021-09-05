const express = require('express');
const router = express.Router();
const {
    postProduct,
    getProducts,
    getProductById,
    patchProductById,
    deleteProductById
} = require('../controllers/products.controller');

router.post('/product',postProduct);
router.get('/products',getProducts);
router.get('/product/:id',getProductById);
router.patch('/product/:id',patchProductById);
router.delete('/product/:id',deleteProductById);

module.exports = router;

