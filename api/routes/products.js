const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

	res.status(200).json({

		message: 'Handling GET requests /products'
	});

});

router.post('/', (req, res, next) => {

	res.status(200).json({

		message: 'Handling POST requests /products'
	});

});

router.get('/:productId', (req, res, next) => {

	const id = req.params.productId;

	if(id === 'spacial'){

		res.status(200).json({
			message: 'You discovered the Spacial ID',
			id: id
		});

	}else{

		res.status(200).json({
			message: 'You passed  an ID'
		});
	}

});


module.exports = router;