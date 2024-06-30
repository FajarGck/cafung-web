const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // Limit file size to 1MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

const express = require('express');
const router = express.Router();
const storesCotrollers = require('../controllers/stores')



router.get('/', storesCotrollers.getAllStores);
router.get('/:id/products', storesCotrollers.getStoresWithProducts);
router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ status: 'Bad Request', error: err });
        } else {
            const { id, name, owner } = req.body;
            const imgPath = req.file ? req.file.path : null;
            storesCotrollers.addStores({ id, name, owner, imgPath })
                .then(result => res.status(200).json({ status: 'ok!', data: result }))
                .catch(error => res.status(400).json({ status: 'Bad Request', error }));
        }
    });
});
router.post('/', storesCotrollers.addStores);
router.put('/:id', storesCotrollers.updateStores);
router.delete('/:id', storesCotrollers.deleteStores);



module.exports = router;
