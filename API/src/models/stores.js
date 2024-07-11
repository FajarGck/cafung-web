const db = require('../config/db');

const getAllStores = async () => {
    const sql = 'SELECT * FROM stores ORDER BY id';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const getStoresWithProducts = async (storeId) => {
    const sql = ` SELECT stores.id AS store_id, stores.name AS store_name, stores.owner, stores.image_path AS store_image, stores.kontak,
                    products.id AS product_id, products.name AS product_name, products.description, products.price, products.image_path AS product_image,
                    categories.id AS category_id, categories.name AS category_name
                    FROM stores
                    LEFT JOIN products ON stores.id = products.store_id
                    LEFT JOIN categories ON products.category_id = categories.id
                    WHERE stores.id = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [storeId], (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const addStores = async  (id, name, owner, kontak, imgPath) => {
    const sql = 'INSERT INTO stores (id, name, owner, kontak, image_path) VALUES(?, ?, ?, ?, ?)';
    const values = [id, name, owner, kontak, imgPath];
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const updateStores = (id, name, owner, kontak, imgPath) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE stores SET name = ?, owner = ?, kontak = ?, image_path = ? WHERE id = ?';
        db.query(sql, [name, owner, kontak, imgPath, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const deleteStores = async (id) => {
    const sql = 'DELETE FROM stores WHERE id = ?';
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
    getAllStores,
    getStoresWithProducts,
    addStores,
    updateStores,
    deleteStores,
};
