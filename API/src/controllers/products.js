const productsModel = require('../models/products');

const getAllProducts = async (req, res) => {
    try {
        const results = await productsModel.getAllProducts();
         const products = results.map(item => ({
            id: item.product_id,
            name: item.product_name,
            description: item.description,
            price: item.price,
            image_path: item.product_image,
            category: {
                id: item.category_id,
                name: item.category_name
            },
            store: {
                id: item.store_id,
                name: item.store_name,
                location: item.location,
                image_path: item.store_image
            }
        }));

        res.status(200).json({
            status: 'ok!',
            data: products
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'ERROR',
            message: 'CANNOT GET DATA',
            error: 'DATABASE QUERY ERROR'
        });
    }
};


const addProduct = async (req, res) => {
    const { name, description, price, imgPath, storeId, categoryId } = req.body;
    try {
        const results = await productsModel.addProduct(name, description, price, imgPath, storeId, categoryId);
        res.status(201).json({
            status: 'ok!',
            message: 'Product added successfully',
            data: {
                isSuccess: results.affectedRows,
                insertId: results.insertId
            }
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            status: 'Bad Request',
            message: 'Failed to add product',
            error: err.message
        });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imgPath, storeId, categoryId } = req.body;
    try {
        const results = await productsModel.updateProduct(id, name, description, price, imgPath, storeId, categoryId);
        if (results.affectedRows === 0) {
            return res.status(404).json({
                status: 'Not Found!',
                message: 'Product not found'
            });
        }
        res.status(200).json({
            status: 'ok!',
            message: 'Product updated successfully',
            data: {
                isSuccess: results.affectedRows,
                message: results.info
            }
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            status: 'error',
            message: 'Failed to update product',
            error: err.message
        });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const results = await productsModel.deleteProduct(id);
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
                message: 'Product Not Found'
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
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct
};
