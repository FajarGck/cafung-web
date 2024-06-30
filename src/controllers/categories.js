const categoriesModel = require('../models/categories');

const getAllCategories = async (req, res) => {
    try {
        const result = await categoriesModel.getAllCategories();
        const categories = result.map(item => ({
            id: item.id,
            name: item.name
        }));
        res.status(200).json({
            status: 'ok!',
            data: {
                categories: categories
            }
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            status: 'Bad Request',
            error: 'DATABASE QUERY ERROR'
        });
    }
};

const getProductsByCategories = async (req, res) => {
    const { categoriesName } = req.params;
    try {
        const results = await categoriesModel.getProductsByCategories(categoriesName);

        // Check if no results found
        if (results.length === 0) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Category not found or no products found in this category'
            });
        }

        // Process results
        const productsByCategory = {
            id: results[0].category_id,
            name: results[0].category_name,
            products: results.map(item => ({
                id: item.product_id,
                name: item.product_name,
                description: item.description,
                price: item.price,
                image_path: item.product_image,
                store: {
                    id: item.store_id,
                    name: item.store_name,
                    owner: item.owner,
                    image_path: item.store_image,
                }
            }))
        };

        res.status(200).json({
            status: 'ok',
            data: productsByCategory
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            error: 'Server error'
        });
    }
};

const addCategories = async (req, res) => {
    const { id, name} = req.body;
    try {
        const result = await categoriesModel.addCategories(id, name);
        res.status(200).json({
            status: 'ok!',
            data: { 
                isSuccess: result.affectedRows,
                insertId: result.insertId
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



module.exports = {
    getAllCategories,
    addCategories,
    getProductsByCategories
};
