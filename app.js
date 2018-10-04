const express =require('express');

const app = express();

const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products'); //import file path api/routes/products.js

const orderRoute = require('./api/routes/orders'); //import file path api/routes/orders.js

app.use((req,res,next)=>{

	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if(req.method === 'OPTIONS'){

		req.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();

});

app.use('/products' , productRoutes); // URL  Example = http://localhost:3000/products/

app.use('/orders',orderRoute); // URL  Example = http://localhost:3000/orders/


module.exports = app;