const mongoose = require('mongoose');

// Define the Car schema
const CarSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  body_type: {
    type: String,
    required: true,
  },
  fuel_type: {
    type: String,
    required: true,
  },
  engine_size: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  listing_date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

// Create the Car model using the schema
module.exports = mongoose.model('Car', CarSchema);



