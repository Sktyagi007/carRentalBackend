const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  src: String,
});

const carSchema = new mongoose.Schema({
  vehicleID: Number,
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
},{versionKey:false});

const vehiclesModel = mongoose.model('master cars', rentalSchema);

module.exports = vehiclesModel;