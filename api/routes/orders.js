const express = require('express');
const router = express.Router();

router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Query completed',
		id: req.params.orderId

	});
});



module.exports = router;
