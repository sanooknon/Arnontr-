const express =require('express');

const app = express();

const bodyParser = require('body-parser'); //LB get json 

const productRoutes = require('./api/routes/products'); //import file path api/routes/products.js

const orderRoute = require('./api/routes/orders'); //import file path api/routes/orders.js

const manageuserRoute = require('./api/routes/manageuser');

const morgan = require('morgan'); // LB get ERROR and Return ERROR Function. npm install --save nodemon

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());	

app.use((req,res,next)=>{

	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if(req.method === 'OPTIONS'){

		req.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();

});



// Rount which should  handle request. 
 
app.use('/products' , productRoutes); // URL  Example = http://localhost:3000/products/

app.use('/orders',orderRoute); // URL  Example = http://localhost:3000/orders/

app.use('/manageuser',manageuserRoute);




// npm install nodemon && add text File package.json Tag script  "start": "nodemon server.js"
//npm start

//Function ERROR NOT Found page
app.use((req,res,next) =>{
	
	const error = new Error('NOD found');
	error.status(404);
	next(error); 

});

app.use((error,req,res,next) =>{

	res.status(error.status || 500 );
	res.json({
		error:{
			message: error.message
		}
	});

});

module.exports = app;