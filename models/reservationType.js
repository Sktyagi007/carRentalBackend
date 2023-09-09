const mongoose = require('mongoose');

// Define the schema for the model
const ModelSchema = new mongoose.Schema({
  '0': String,
  '1': String,
});

// Create a model based on the schema
const reservationTypeModel = mongoose.model('reservation types', ModelSchema);

module.exports = reservationTypeModel;
