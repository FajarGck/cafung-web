const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products')



router.get('/', productsControllers.getAllProducts);
router.post('/', productsControllers.addProduct);
router.put('/:id', productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProduct);



module.exports = router;
