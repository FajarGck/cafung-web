const db = require('../config/db');

const getAllProducts = async () => {
    const sql = `SELECT products.id AS product_id, products.name AS product_name, products.description, products.price, products.image_path AS product_image,
                categories.id AS category_id, categories.name AS category_name,
                stores.id AS store_id, stores.name AS store_name, stores.owner, stores.image_path AS store_image
                FROM products
                LEFT JOIN categories ON products.category_id = categories.id
                LEFT JOIN stores ON products.store_id = stores.id`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) {
                console.log(err)
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
const addProduct = async (name, description, price, imgPath, storeId, categoryId) => {
    const sql = `
        INSERT INTO products (name, description, price, image_path, store_id, category_id)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [name, description, price, imgPath, storeId, categoryId];
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

const updateProduct = async (id, name, description, price, imgPath, storeId, categoryId) => {
    const sql = `
        UPDATE products
        SET name = ?, description = ?, price = ?, image_path = ?, store_id = ?, category_id = ?
        WHERE id = ?
    `;
    const values = [name, description, price, imgPath, storeId, categoryId, id];
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

const deleteProduct = async (id) => {
   const sql = 'DELETE FROM `products` WHERE `products`.`id` = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};



module.exports = {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct
};
