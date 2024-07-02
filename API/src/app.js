require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8000;
const app = express();
const categoriesRoute = require('./routes/categories');
const storesRoute = require('./routes/stores');
const productsRoute = require('./routes/products');
const logsRequestMiddleware = require('./middleware/logs');
const upload = require('./middleware/upload');

app.use(express.json());
app.use(cors());
app.use('/public', express.static('public'));
app.use(logsRequestMiddleware);
app.get('/', (req, res) => { res.send("ok!") });
app.use('/categories', categoriesRoute);
app.use('/stores', storesRoute);
app.use('/products', productsRoute);
app.use((req, res, next) => {
    res.status(404).json({
        status: 'Not Found',
        message: 'Bad Request!'
    });
});

app.listen(PORT, () => {
    console.log("server running on http://localhost:" + PORT);
});
