const express = require('express');
const router = express.Router();
const storesCotrollers = require('../controllers/stores')



router.get('/', storesCotrollers.getAllStores);
router.get('/:id/products', storesCotrollers.getStoresWithProducts);
router.post('/', storesCotrollers.addStores);
router.put('/:id', storesCotrollers.updateStores);
router.delete('/:id', storesCotrollers.deleteStores);



module.exports = router;
