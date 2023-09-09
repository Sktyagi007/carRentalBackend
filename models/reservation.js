const mongoose = require('mongoose');

// Define a schema for the reservation
const carSchema = new mongoose.Schema({
    type: String,
    typeID: String,
});  

const extrasSchema = new mongoose.Schema({
    type: String,
    typeID: String,
});  

const reservationSchema = new mongoose.Schema({
  reservationID: String,
  userID: String,
  travelItenary: {
    reservationType: String,
    pickupLocation: String,
    dropLocation: String,
    pickupDate: String,
    pickupTime: String,
    dropDate: String,
    dropTime: String,
    residency: String,
    age: String,
  },
  car: carSchema,
  extras: [extrasSchema],
  payment: String,
  invoiceID: String,
  reservationDate: String,
  reservationStatus: String,
  allocatedCarID: String,
  allocatedDriverID: String,
  promoCode:String
},{versionKey:false});

// Create a model for the reservation
const reservationModel = mongoose.model('master reservation', reservationSchema);

module.exports = reservationModel;
