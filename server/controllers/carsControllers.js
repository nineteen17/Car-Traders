const Car = require("../models/carsModels");

// Get all cars with dynamic parameters
exports.getCarsParams = async (req, res) => {
  try {
    const query = {};

    for (const key in req.query) {
      if (req.query.hasOwnProperty(key)) {
        query[key] = req.query[key];
      }
    }

    const cars = await Car.find(query).exec();
    res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching cars' });
  }
};


// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find().exec();
        res.status(200).json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching cars' });
    }
    }