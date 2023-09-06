const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  src: String,
  back: String,
  side: String,
});

const carSchema = new mongoose.Schema({
  id: Number,
  image: [imageSchema],
  type: String,
  title: String,
  seats: String,
  luggageCapacity: String,
  transmissionType: String,
  ac: String,
  doors: String,
  payNowPrice: String,
  payLaterPrice: String,
});

const rentalSchema = new mongoose.Schema({
  self: [carSchema],
  chauffer: [carSchema],
});

const vehiclesModel = mongoose.model('Master Cars', rentalSchema);

module.exports = vehiclesModel;