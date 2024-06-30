const express = require('express');
const router = express.Router();
const categoriesCotrollers = require('../controllers/categories')



router.get('/', categoriesCotrollers.getAllCategories);
router.get('/:categoriesName/products', categoriesCotrollers.getProductsByCategories);
router.post('/', categoriesCotrollers.addCategories);



module.exports = router;
