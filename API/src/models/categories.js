const db = require('../config/db');

const getAllCategories = async () => {
    const sql = 'SELECT * FROM categories ORDER BY id';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const getProductsByCategories = async (categoriesName) => {
    const sql = `SELECT products.id AS product_id, products.name AS product_name, products.description, products.price, products.image_path AS product_image,
                categories.id AS category_id, categories.name AS category_name,
                stores.id AS store_id, stores.name AS store_name, stores.owner, stores.image_path AS store_image
                FROM categories
                LEFT JOIN products ON products.category_id = categories.id
                LEFT JOIN stores ON products.store_id = stores.id
                WHERE categories.name = ?`;

    return new Promise((resolve, reject) => {
        db.query(sql, [categoriesName], (err, results) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};


const addCategories = async (id, name) => {
    const sql = 'INSERT INTO categories (id, name) VALUES(?, ?)';
    const values = [id, name];
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};


module.exports = {
    getAllCategories,
    addCategories,
    getProductsByCategories,
};
