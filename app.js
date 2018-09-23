const express =require('express');

const app = express();

const productRoutes = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');

app.use('/products' , productRoutes);
app.use('/orders',orderRoute);


module.exports = app;