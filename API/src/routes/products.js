const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products')
const upload = require('../middleware/upload');



router.get('/', productsControllers.getAllProducts);
router.post('/', upload, productsControllers.addProduct);
router.put('/:id', upload, productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProduct);



module.exports = router;
