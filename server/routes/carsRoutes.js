const express = require('express');
const router = express.Router();
const carsControllers = require('../controllers/carsControllers');

router.get('/cars', carsControllers.getAllCars);
router.get('/carsParams', carsControllers.getCarsParams);
module.exports = router;
