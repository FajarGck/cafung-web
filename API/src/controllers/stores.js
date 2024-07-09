const storesModel = require('../models/stores');

const getAllStores = async (req, res) => {
    try {
        const results = await storesModel.getAllStores();
        const stores = results.map(item => ({
            id: item.id,
            name: item.name,
            owner: item.owner,
            kontak: item.kontak,
            image_path: item.image_path
        }))
        res.status(200).json({
            status: 'ok!',
            data: {
                stores: stores
           }
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            status: 'Bad Request',
            error: err.sqlMessage
        });
    }
};

const getStoresWithProducts = async (req, res) => {
    const storeId = req.params.id;
    try {
        const results = await storesModel.getStoresWithProducts(storeId);

        if (results.length === 0) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Store not found'
            });
        }

        const store = {
            id: results[0].store_id,
            name: results[0].store_name,
            owner: results[0].owner,
            image_path: results[0].store_image,
            products: results.map(item => ({
                id: item.product_id,
                name: item.product_name,
                description: item.description,
                price: item.price,
                kontak: item.kontak,
                image_path: item.product_image,
                category: {
                    id: item.category_id,
                    name: item.category_name
                }
            }))
        };
        res.status(200).json({
            status: 'ok!',
            data: store
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            error: err
        });
    }
};


const addStores = async (req, res) => {
    const { id, name, owner, kontak } = req.body;
      const imgPath = req.file ? req.file.path : null;
    try {
        const results = await storesModel.addStores(id, name, owner, imgPath);
        res.status(200).json({
            status: 'ok!',
            data: {
                isSuccess: results.affectedRows,
                insertId: results.insertId
            }
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            status: 'Bad Request',
            error: err.sqlMessage
        });
    }
};

const updateStores = async (req, res) => {
    const { id } = req.params;
    const { name, owner, kontak } = req.body;
      const imgPath = req.file ? req.file.path : null;
    try {
        const results = await storesModel.updateStores(id, name, owner, imgPath);
        if (results?.affectedRows) {
            res.status(200).json({
                status: 'ok!',
                data: {
                    isSuccess: results.affectedRows,
                    message: results.info
                }
            });
        } else {
            res.status(404).json({
                status: 'Not Found',
                isSuccess: results.affectedRows,
                message: results.info
            });
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({
            status: 'Bad Request',
            error: err.sqlMessage || err.message
        });
    }
};

const deleteStores = async (req, res) => {
    const { id } = req.params;
    try {
        const results = await storesModel.deleteStores(id);
        console.log(results)
        if (results?.affectedRows) {
            res.status(200).json({
                status: 'ok!',
                data: {
                    isSuccess: results.affectedRows,
                    message: 'Successfully Delete data'
                }
            });
        } else {
            res.status(404).json({
                status: 'Not found',
                message: 'Name Not Found'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'ERROR',
            message: 'CANNOT DELETE DATA',
            error: err
        });
    }
};

module.exports = {
    getAllStores,
    getStoresWithProducts,
    addStores,
    updateStores,
    deleteStores
};
