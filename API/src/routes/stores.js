const express = require('express');
const router = express.Router();
const storesCotrollers = require('../controllers/stores');
const upload = require('../middleware/upload');



router.get('/', storesCotrollers.getAllStores);
router.get('/:id/products', storesCotrollers.getStoresWithProducts);
router.post('/', upload, storesCotrollers.addStores);
router.put('/:id', upload, storesCotrollers.updateStores);
router.delete('/:id', storesCotrollers.deleteStores);



module.exports = router;
